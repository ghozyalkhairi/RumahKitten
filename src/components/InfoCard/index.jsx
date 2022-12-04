import { memo } from "react"
import { Container } from "@chakra-ui/react"
import Title from "../Title"

function InfoCard() {
  return (
    <Container bgColor="brand.primary" boxShadow="lg" borderRadius={15} p={4}>
      <Title info text="Disini kamu dapat mengadopsi sahabat berbulumu." />
      <Title info text="Kamu juga bisa order wet food, pasti kitten suka." />
    </Container>
  )
}

export default memo(InfoCard)
