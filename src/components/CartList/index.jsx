import { memo } from "react"
import { Text, Container, Center, Flex } from "@chakra-ui/react"
import { useUserCart, useCartActions } from "../../stores/cartStore"
import CartItem from "../CartItem"
import CustomButton from "../CustomButton"
import EmptyCartIcon from "../../assets/icons/EmptyCartIcon"

function CartList() {
  const { cats, foods } = useUserCart()
  const { getTotalPrice, getWhatsAppMessageLink } = useCartActions()
  if (!cats.length && !foods.length)
    return (
      <Center h="60vh">
        <Flex direction="column">
          <EmptyCartIcon />
          <Text mt={4} fontSize={20} textAlign="center">
            Wah, Keranjang kamu kosong
          </Text>
        </Flex>
      </Center>
    )
  return (
    <>
      {cats.length ? (
        <Container
          bgColor="brand.primary"
          boxShadow="md"
          borderRadius={15}
          p={2}
        >
          <Center>
            <Text fontSize={18} fontWeight="bold" color="brand.secondary">
              Adopsi
            </Text>
          </Center>
          <CartItem kitten />
        </Container>
      ) : null}
      {foods.length ? (
        <Container
          bgColor="brand.primary"
          boxShadow="md"
          borderRadius={15}
          p={2}
        >
          <Center>
            <Text fontSize={18} fontWeight="bold" color="brand.secondary">
              Makanan
            </Text>
          </Center>
          <CartItem food />
          <Center pt={4} pb={3}>
            <Text fontSize={18} color="brand.secondary">
              <Text fontWeight="bold" as="span">
                Total Harga Makanan:
              </Text>{" "}
              {getTotalPrice()}
            </Text>
          </Center>
        </Container>
      ) : null}
      <CustomButton
        checkout
        text="Checkout"
        address={getWhatsAppMessageLink()}
      />
    </>
  )
}

export default memo(CartList)
