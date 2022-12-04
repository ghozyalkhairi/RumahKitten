import { Center, Container, Flex, Text } from "@chakra-ui/react"
import { useFoodActions, useVariant } from "../../stores/foodStore"
import { memo } from "react"

function FoodVariant() {
  const variant = useVariant()
  const { setVariant } = useFoodActions()
  return (
    <Flex mt={2}>
      <Container
        cursor="pointer"
        bgColor={variant === "S" ? "brand.primary" : "brand.secondary"}
        boxShadow={variant === "S" ? "inset 0px 0px 0px 4px #F2F2F2" : ""}
        borderRadius={20}
        p={3}
        mt={2}
        mb={4}
        mr={2}
        onClick={() => setVariant("S")}
      >
        <Center>
          <Text
            color={variant === "S" ? "brand.secondary" : "black"}
            fontWeight="bold"
          >
            Porsi S
          </Text>
        </Center>
      </Container>
      <Container
        cursor="pointer"
        bgColor={variant === "L" ? "brand.primary" : "brand.secondary"}
        boxShadow={variant === "L" ? "inset 0px 0px 0px 4px #F2F2F2" : ""}
        borderRadius={20}
        p={3}
        mt={2}
        mb={4}
        ml={2}
        onClick={() => setVariant("L")}
      >
        <Center>
          <Text
            color={variant === "L" ? "brand.secondary" : "black"}
            fontWeight="bold"
          >
            Porsi L
          </Text>
        </Center>
      </Container>
    </Flex>
  )
}

export default memo(FoodVariant)
