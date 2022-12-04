import { memo } from "react"
import { Center, Flex, Text, Spacer } from "@chakra-ui/react"
import { useCartCount } from "../../stores/foodStore"
import AddCartIcon from "../../assets/icons/AddCartIcon"
import MinCartIcon from "../../assets/icons/MinCartIcon"

function FoodCard() {
  const cartCount = useCartCount()
  return (
    <Flex bgColor="brand.secondary" borderRadius={20} py={3} px={4} mb={4}>
      <MinCartIcon />
      <Spacer />
      <Center>
        <Text fontSize={18} fontWeight="bold">
          {cartCount}
        </Text>
      </Center>
      <Spacer />
      <AddCartIcon />
    </Flex>
  )
}

export default memo(FoodCard)
