import { memo } from "react"
import { Container, VStack, Text } from "@chakra-ui/react"
import Header from "../../components/Header"
import BackButton from "../../components/BackButton"
import StatusCard from "../../components/StatusCard"
import Footer from "../../components/Footer"
import CartList from "../../components/CartList"

function Cart() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
  return (
    <Container h="100vh" w="100vw">
      <VStack>
        <Header />
        <BackButton />
        <StatusCard cart />
        <CartList />
        <Footer detail />
      </VStack>
    </Container>
  )
}

export default memo(Cart)
