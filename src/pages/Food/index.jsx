import { Container, Text, VStack, Center, Spinner } from "@chakra-ui/react"
import { memo, useEffect } from "react"
import { useKittenLoading, useKittenActions } from "../../stores/kittenStore"
import { useFoodList, useFoodActions } from "../../stores/foodStore"
import Header from "../../components/Header"
import KittenList from "../../components/KittenList"
import StatusCard from "../../components/StatusCard"
import Footer from "../../components/Footer"
import CartPopup from "../../components/CartPopup"
import Navbar from "../../components/Navbar"

function Food() {
  const foodList = useFoodList()
  const loading = useKittenLoading()
  const { fetchFood } = useFoodActions()
  const { setLoading } = useKittenActions()
  useEffect(() => {
    if (!foodList.length) {
      setLoading(true)
      fetchFood()
      setLoading(false)
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])
  return (
    <Container h="100vh" w="100vw">
      <VStack>
        <CartPopup />
        <Header />
        <StatusCard food />
        {!loading ? (
          <KittenList loading={loading} />
        ) : (
          <Center pt={7}>
            <Spinner size="lg" />
          </Center>
        )}
        {!foodList.length && !loading && (
          <Center>
            <Text>Kitten Food tidak ditemukan</Text>
          </Center>
        )}
        <Footer />
        <Navbar />
      </VStack>
    </Container>
  )
}

export default memo(Food)
