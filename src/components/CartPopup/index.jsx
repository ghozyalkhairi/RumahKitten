import { memo } from "react"
import { Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useUserCart } from "../../stores/cartStore"
import CartPopupIcon from "../../assets/icons/CartPopupIcon"

function CartPopup() {
  const navigate = useNavigate()
  const { cats, foods } = useUserCart()
  const onNavigate = () => navigate("/cart")
  const isZero = !cats.length && !foods.length

  return (
    <>
      {isZero ? null : (
        <Flex
          cursor="pointer"
          onClick={onNavigate}
          position="fixed"
          top={4}
          right={4}
          p={3}
          backgroundColor="brand.secondary"
          borderWidth={2}
          borderColor="brand.primary"
          borderRadius={100}
          boxShadow="dark-lg"
          zIndex={10}
        >
          <CartPopupIcon />
        </Flex>
      )}
    </>
  )
}

export default memo(CartPopup)
