import { Flex, Text } from "@chakra-ui/react"
import { memo } from "react"
import { useCartActions, useUserCart } from "../../stores/cartStore"
import IncIcon from "../../assets/icons/IncIcon"
import DecIcon from "../../assets/icons/DecIcon"

function CartControl({ food }) {
  const { incrementFood, decrementFood } = useCartActions()
  const { foods } = useUserCart()
  const onInc = () => incrementFood(food.porsi, food.jumlah)
  const onDec = () => decrementFood(food.porsi, food.jumlah)

  return (
    <Flex
      boxShadow="inset 0px 0px 0px 2px #FA902F"
      justifyContent="space-between"
      p={2}
      borderRadius={5}
    >
      <DecIcon isZero={food.jumlah <= 1} onClick={onDec} />
      <Text>{food.jumlah}</Text>
      <IncIcon isMax={food.jumlah >= 10} onClick={onInc} />
    </Flex>
  )
}

export default memo(CartControl)
