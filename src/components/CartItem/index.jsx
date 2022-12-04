import { memo } from "react"
import { Flex, Text, Image, Container } from "@chakra-ui/react"
import CustomButton from "../CustomButton"
import CartControl from "../CartControl"
import { useUserCart, useCartActions } from "../../stores/cartStore"

function CartItem({ kitten, food }) {
  const { cats, foods } = useUserCart()
  const { removeFromUserCart } = useCartActions()
  return (
    <>
      {food &&
        foods.map((food) => (
          <Container
            key={food.porsi}
            bg="brand.secondary"
            py={3}
            mt={3}
            borderRadius={15}
          >
            <Flex>
              <Flex pr={2}>
                <Image
                  src={food.gambar}
                  h={{ base: 125, md: 155, xl: 165 }}
                  w={200}
                  borderRadius={15}
                />
              </Flex>
              <Flex direction="column" w="100%" justifyContent="space-between">
                <Text fontSize={17}>
                  <Text fontWeight="bold" as="span">
                    {food.nama}
                  </Text>
                  , Porsi {food.porsi}
                </Text>
                <CartControl food={food} />
                <CustomButton
                  hapus
                  text="Hapus"
                  onClick={() => removeFromUserCart(food.porsi, "food")}
                />
              </Flex>
            </Flex>
          </Container>
        ))}
      {kitten &&
        cats.map((cat) => (
          <Container
            key={cat.id}
            bg="brand.secondary"
            py={3}
            mt={3}
            borderRadius={15}
          >
            <Flex>
              <Flex pr={2}>
                <Image
                  src={cat.gambar[0]}
                  h={{ base: 125, md: 155, xl: 165 }}
                  w={200}
                  borderRadius={15}
                />
              </Flex>
              <Flex direction="column" w="100%" justifyContent="space-between">
                <Text fontSize={17}>
                  <Text fontWeight="bold" as="span">
                    {cat.nama}
                  </Text>
                  , {cat.breed}
                </Text>
                <Text fontSize={17}>{cat.jk}</Text>
                <CustomButton
                  hapus
                  text="Hapus"
                  onClick={() => removeFromUserCart(cat.id, "cat")}
                />
              </Flex>
            </Flex>
          </Container>
        ))}
    </>
  )
}
export default memo(CartItem)
