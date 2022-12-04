import { memo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Flex, Image, Skeleton, Text } from "@chakra-ui/react"
import CustomButton from "../CustomButton"
import LikeIcon from "../../assets/icons/LikeIcon"

function KittenCard({
  nama,
  jk,
  umur,
  gambar,
  kittenId,
  foodNama,
  foodDesc,
  foodGambar,
  foodId,
}) {
  const [imgLoading, setImgLoading] = useState(true)
  const navigate = useNavigate()
  const onClick = () => navigate(`/kitten/${kittenId}`)
  const onFoodClick = () => navigate(`/food/${foodId}`)
  return (
    <Container bgColor="brand.primary" boxShadow="lg" borderRadius={15} p={4}>
      <Skeleton isLoaded={!imgLoading}>
        <Image
          onLoad={() => setImgLoading(false)}
          src={foodGambar ? foodGambar : gambar}
          borderRadius={20}
          w="full"
          h={{ base: 300, md: 400, xl: 500 }}
          boxShadow="md"
        />
      </Skeleton>
      <Text mt={4} color="brand.secondary" fontSize={18} fontWeight="bold">
        {foodNama ? foodNama : nama}
      </Text>
      <Flex mt={2} direction="row" justifyContent="space-between">
        {foodDesc ? (
          <Text color="brand.secondary" fontSize={18}>
            {foodDesc}
          </Text>
        ) : (
          <>
            <Text color="brand.secondary" fontSize={18}>
              {jk}
            </Text>
            <Text color="brand.secondary" fontSize={18}>
              {umur}
            </Text>
          </>
        )}
      </Flex>
      <Flex mt={3} direction="row" justifyContent="space-between">
        <LikeIcon width={40} height={45} />
        <CustomButton
          detail
          text="Detail"
          onClick={foodNama ? onFoodClick : onClick}
        />
      </Flex>
    </Container>
  )
}

export default memo(KittenCard)
