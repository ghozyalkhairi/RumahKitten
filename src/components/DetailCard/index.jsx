import { memo } from "react"
import { useLocation } from "react-router-dom"
import { Text, Container, Center, useToast } from "@chakra-ui/react"
import { useKitten } from "../../stores/kittenStore"
import {
  useCartCount,
  useVariant,
  useFood,
  useFoodActions,
} from "../../stores/foodStore"
import { useCartActions } from "../../stores/cartStore"
import CustomButton from "../CustomButton"
import ImageViewer from "../ImageViewer"
import KittenInfo from "../KittenInfo"
import FoodVariant from "../FoodVariant"
import FoodCart from "../FoodCart"

function DetailCard() {
  const { pathname } = useLocation()
  const toast = useToast()
  const isFood = pathname.includes("food")
  const { getFoodPrice } = useFoodActions()
  const { addToUserCart } = useCartActions()
  const kitten = useKitten()
  const food = useFood()
  const cartCount = useCartCount()
  const variant = useVariant()
  const zero = cartCount === 0 || !variant

  const onAddToCart = () => {
    if (isFood) {
      const newFood = {
        id: food.id,
        nama: food.nama,
        harga: food.harga[variant],
        porsi: variant,
        jumlah: cartCount,
        gambar: food.gambar[0],
      }
      !zero && addToUserCart(newFood, "food", variant, cartCount)
      toast({
        title: "Berhasil",
        description: `${cartCount} ${food.nama} (Porsi ${variant}) ditambahkan ke keranjang.`,
        status: "success",
        duration: 2500,
        isClosable: true,
        position: "top",
      })
      return
    }
    addToUserCart(kitten, "kitten")
    toast({
      title: "Berhasil",
      description: `Adopsi ${kitten.nama} ditambahkan ke keranjang.`,
      status: "success",
      duration: 2500,
      isClosable: true,
      position: "top",
    })
  }

  return (
    <>
      <ImageViewer gambar={isFood ? food.gambar : kitten.gambar} />
      <Container bgColor="brand.primary" boxShadow="md" borderRadius={15} p={4}>
        <Center pb={3}>
          <Text fontSize={20} fontWeight="bold" color="brand.secondary">
            {isFood ? food.nama : kitten.nama}
          </Text>
        </Center>
        {isFood ? (
          <Text color="brand.secondary">{getFoodPrice() || food.desc}</Text>
        ) : (
          <Text color="brand.secondary">{kitten.desc}</Text>
        )}
        {!isFood && (
          <KittenInfo umur={kitten.umur} jk={kitten.jk} breed={kitten.breed} />
        )}
        {isFood && (
          <>
            <FoodVariant />
            <FoodCart />
          </>
        )}
        <CustomButton
          adopsi={!isFood}
          food={isFood}
          text={isFood ? "Pesan" : "Adopsi"}
          zero={zero}
          onClick={onAddToCart}
        />
      </Container>
    </>
  )
}

export default memo(DetailCard)
