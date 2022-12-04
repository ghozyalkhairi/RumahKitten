import { memo } from "react"
import { Center, Text } from "@chakra-ui/react"

function Title({ text, detail, info }) {
  if (detail)
    return (
      <Text fontSize="xl" color="brand.secondary">
        {text}
      </Text>
    )
  if (info)
    return (
      <Text my={1} fontSize={17} fontWeight="300" color="brand.secondary">
        {text}
      </Text>
    )
  return (
    <Center>
      <Text fontWeight="bold" fontSize="4xl" color="brand.secondary">
        {text}
      </Text>
    </Center>
  )
}

export default memo(Title)
