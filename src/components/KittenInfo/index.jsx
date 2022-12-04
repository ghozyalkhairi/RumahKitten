import { memo } from "react"
import { Text, Flex, Container, Center } from "@chakra-ui/react"
import AgeIcon from "../../assets/icons/AgeIcon"
import GenderIcon from "../../assets/icons/GenderIcon"
import PawIcon from "../../assets/icons/PawIcon"

function KittenInfo({ umur, jk, breed }) {
  return (
    <Flex py={4} alignItems="center">
      <Container
        bgColor="brand.secondary"
        borderRadius={20}
        px={2}
        py={3}
        mx={1}
      >
        <AgeIcon />
        <Center>
          <Text fontSize={15} pt={2} color="brand.neutral">
            {umur}
          </Text>
        </Center>
      </Container>
      <Container
        bgColor="brand.secondary"
        borderRadius={20}
        px={2}
        py={3}
        mx={1}
      >
        <GenderIcon jk={jk} />
        <Center>
          <Text fontSize={15} pt={2} color="brand.neutral">
            {jk}
          </Text>
        </Center>
      </Container>
      <Container
        bgColor="brand.secondary"
        borderRadius={20}
        px={2}
        py={3}
        mx={1}
      >
        <PawIcon />
        <Center>
          <Text fontSize={15} pt={2} color="brand.neutral">
            {breed}
          </Text>
        </Center>
      </Container>
    </Flex>
  )
}

export default memo(KittenInfo)
