import { memo, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Center, Container, Flex, Spacer } from "@chakra-ui/react"
import { useKittenActions } from "../../stores/kittenStore"
import { useFoodActions } from "../../stores/foodStore"
import SplashImage from "../../assets/images/splash.jpg"
import CustomButton from "../../components/CustomButton"
import KittenIcon from "../../assets/icons/KittenIcon"
import Title from "../../components/Title"

function Splash() {
  const navigate = useNavigate()
  const { fetchKitten, setLoading } = useKittenActions()
  const { fetchFood } = useFoodActions()
  const onNavigate = () => navigate("/home")
  useEffect(() => {
    setLoading(true)
    fetchKitten()
    fetchFood()
    setLoading(false)
  }, [])
  return (
    <Container bgImage={SplashImage} bgSize="100vh" h="100vh" w="100vw">
      <Center h="100vh" p={2}>
        <Flex h="40vh" direction="column">
          <KittenIcon />
          <Spacer />
          <Title text="Rumah Kitten" />
          <Spacer />
          <Title detail text="Tempat mencari sahabat berbulu." />
          <Spacer />
          <CustomButton onClick={onNavigate} text="Mulai" />
        </Flex>
      </Center>
    </Container>
  )
}

export default memo(Splash)
