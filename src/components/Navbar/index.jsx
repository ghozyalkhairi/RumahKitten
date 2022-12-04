import { memo } from "react"
import { useLocation } from "react-router-dom"
import { Container, Flex, Spacer } from "@chakra-ui/react"
import NavFoodIcon from "../../assets/icons/NavFoodIcon"
import NavInfoIcon from "../../assets/icons/NavInfoIcon"
import NavKittenIcon from "../../assets/icons/NavKittenIcon"

function Navbar() {
  const { pathname } = useLocation()
  return (
    <Container position="fixed" bottom={0}>
      <Flex backgroundColor="brand.nav" py={4}>
        <NavKittenIcon
          width={30}
          height={30}
          active={pathname.includes("home")}
        />
        <Spacer />
        <NavFoodIcon
          width={30}
          height={30}
          active={pathname.includes("food")}
        />
        <Spacer />
        <NavInfoIcon
          width={30}
          height={30}
          active={pathname.includes("info")}
        />
      </Flex>
    </Container>
  )
}

export default memo(Navbar)
