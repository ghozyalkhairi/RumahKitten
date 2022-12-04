import { memo } from "react"
import { Center, Text } from "@chakra-ui/react"

function Header() {
  return (
    <Center pt={3} pb={2}>
      <Text fontSize="md" fontWeight="medium" color="brand.header">
        Rumah Kitten
      </Text>
    </Center>
  )
}

export default memo(Header)
