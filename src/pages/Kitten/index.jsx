import { memo, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Spinner, VStack, Center } from "@chakra-ui/react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BackButton from "../../components/BackButton"
import DetailCard from "../../components/DetailCard"
import {
  useKittenList,
  useKittenLoading,
  useKittenActions,
} from "../../stores/kittenStore"
import CartPopup from "../../components/CartPopup"

function Kitten() {
  const params = useParams()
  const kittenList = useKittenList()
  const loading = useKittenLoading()
  const { fetchKitten, setLoading, setKitten } = useKittenActions()

  useEffect(() => {
    if (!kittenList.length) {
      setLoading(true)
      fetchKitten()
      setKitten(params.id)
      setLoading(false)
    }
    if (kittenList.length) setKitten(params.id)
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

export default memo(Kitten)
