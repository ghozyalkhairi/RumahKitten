import { memo, useEffect } from "react"
import { Center, Container, Spinner, Text, VStack } from "@chakra-ui/react"
import {
  useKittenList,
  useKittenLoading,
  useKittenActions,
} from "../../stores/kittenStore"
import Search from "../../components/Search"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import StatusCard from "../../components/StatusCard"
import KittenList from "../../components/KittenList"
import Navbar from "../../components/Navbar"
import CartPopup from "../../components/CartPopup"

function Home() {
  const kittenList = useKittenList()
  const loading = useKittenLoading()
  const { fetchKitten, setLoading } = useKittenActions()
  useEffect(() => {
    if (!kittenList.length) {
      setLoading(true)
      fetchKitten()
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
        <Search />
        <StatusCard jumlahKitten={kittenList.length} loading={loading} />
        {!loading ? (
          <KittenList kitten />
        ) : (
          <Center pt={7}>
            <Spinner size="lg" />
          </Center>
        )}
        {!kittenList.length && !loading && (
          <Center>
            <Text>Kitten tidak ditemukan</Text>
          </Center>
        )}
        <Footer />
        <Navbar />
      </VStack>
    </Container>
  )
}

export default memo(Home)
