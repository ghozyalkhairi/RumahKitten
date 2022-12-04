import { memo, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Spinner, VStack, Center } from "@chakra-ui/react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BackButton from "../../components/BackButton"
import DetailCard from "../../components/DetailCard"
import { useFoodList, useFoodActions } from "../../stores/foodStore"
import { useKittenLoading, useKittenActions } from "../../stores/kittenStore"
import CartPopup from "../../components/CartPopup"

function FoodDetails() {
  const params = useParams()
  const foodList = useFoodList()
  const { fetchFood, setFood, resetVariantCount } = useFoodActions()
  const { setLoading } = useKittenActions()
  const loading = useKittenLoading()

  useEffect(() => {
    resetVariantCount()
    if (!foodList.length) {
      setLoading(true)
      fetchFood()
      setFood(params.id)
      setLoading(false)
    }
    if (foodList.length) setFood(params.id)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [params.id])

  return (
    <Container h="100vh" w="100vw">
      <VStack>
        <CartPopup />
        <Header />
        <BackButton />
        {loading ? (
          <Center pt={7}>
            <Spinner size="lg" />
          </Center>
        ) : (
          <DetailCard />
        )}
        <Footer detail />
      </VStack>
    </Container>
  )
}

export default memo(FoodDetails)
