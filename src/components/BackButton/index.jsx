import { memo } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Flex, Text } from "@chakra-ui/react"
import BackIcon from "../../assets/icons/BackIcon"

function BackButton() {
  const navigate = useNavigate()
  const onBack = () => {
    if (window.history.state) {
      navigate(-1)
      return
    }
    navigate("/home")
  }
  return (
    <Container
      cursor="pointer"
      onClick={onBack}
      bgColor="brand.primary"
      boxShadow="md"
      borderRadius={15}
      p={4}
    >
      <Flex alignItems="center">
        <BackIcon width={30} height={30} />
        <Text ml={3} fontSize={16} fontWeight="bold" color="brand.secondary">
          Kembali
        </Text>
      </Flex>
    </Container>
  )
}

export default memo(BackButton)
