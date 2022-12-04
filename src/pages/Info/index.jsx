import { Container, Text, VStack } from "@chakra-ui/react"
import { memo } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import StatusCard from "../../components/StatusCard"
import Navbar from "../../components/Navbar"
import InfoCard from "../../components/InfoCard"
import CartPopup from "../../components/CartPopup"

function Info() {
  return (
    <Container h="100vh" w="100vw">
      <VStack>
        <CartPopup />
        <Header />
        <StatusCard info />
        <InfoCard />
        <Navbar />
        <Footer />
      </VStack>
    </Container>
  )
}

export default memo(Info)
