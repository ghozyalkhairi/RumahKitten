import { memo } from "react"
import { Button, LinkOverlay, Text } from "@chakra-ui/react"

function CustomButton({
  text,
  onClick,
  detail,
  adopsi,
  food,
  zero,
  hapus,
  checkout,
  address,
}) {
  if (detail)
    return (
      <Button
        onClick={onClick}
        bgColor="brand.secondary"
        color="brand.neutral"
        py={6}
        ml={3}
        w="100%"
        fontSize={16}
        _hover={{
          color: "#F2F2F2",
          backgroundColor: "rgba(256,256,256,0)",
          boxShadow: "inset 0px 0px 0px 2px #F2F2F2",
        }}
      >
        {text}
      </Button>
    )
  if (adopsi)
    return (
      <Button
        onClick={onClick}
        bgColor="brand.accent"
        color="brand.secondary"
        py={6}
        w="100%"
        fontSize={16}
        _hover={{
          color: "#F2F2F2",
          backgroundColor: "rgba(256,256,256,0)",
          boxShadow: "inset 0px 0px 0px 2px #F2F2F2",
        }}
      >
        <Text>{text}</Text>
      </Button>
    )
  if (checkout)
    return (
      <Button
        onClick={onClick}
        bgColor="brand.accent"
        color="brand.secondary"
        py={7}
        w="100%"
        fontSize={16}
        _hover={{
          color: "black",
          backgroundColor: "rgba(256,256,256,0)",
          boxShadow: "inset 0px 0px 0px 2px #25DD58",
        }}
      >
        <LinkOverlay href={address} target="_blank">
          <Text>{text}</Text>
        </LinkOverlay>
      </Button>
    )
  if (food)
    return (
      <Button
        onClick={onClick}
        isDisabled={zero}
        bgColor="brand.accent"
        color="brand.secondary"
        py={6}
        w="100%"
        fontSize={16}
        _hover={
          !zero && {
            color: "#F2F2F2",
            backgroundColor: "rgba(256,256,256,0)",
            boxShadow: "inset 0px 0px 0px 2px #F2F2F2",
          }
        }
      >
        <Text>{text}</Text>
      </Button>
    )
  if (hapus)
    return (
      <Button
        onClick={onClick}
        bgColor="brand.primary"
        color="brand.secondary"
        py={5}
        fontSize={16}
        _hover={{
          color: "black",
          backgroundColor: "rgba(256,256,256,0)",
          boxShadow: "inset 0px 0px 0px 2px #FA902F",
        }}
      >
        {text}
      </Button>
    )
  return (
    <Button
      onClick={onClick}
      bgColor="brand.primary"
      color="brand.secondary"
      py={6}
      fontSize={16}
      _hover={{
        color: "#F2F2F2",
        backgroundColor: "rgba(256,256,256,0)",
        boxShadow: "inset 0px 0px 0px 2px #F2F2F2",
      }}
    >
      {text}
    </Button>
  )
}

export default memo(CustomButton)
