import { memo, useEffect, useState } from "react"
import { Center, Flex, Image } from "@chakra-ui/react"

function ImageViewer({ gambar }) {
  const [selected, setSelected] = useState("")
  useEffect(() => {
    if (gambar) setSelected(gambar[0])
  }, [gambar])
  return (
    <>
      <Image
        src={selected}
        borderRadius={20}
        width="100%"
        h={{ base: 350, md: 450, xl: 550 }}
        boxShadow="lg"
        pt={2}
      />
      <Flex justifyContent="center" alignItems="center" py={1}>
        {gambar &&
          gambar.map((item, index) => (
            <Center
              key={`${item}+${Math.floor(Math.random() * 100) + 1}`}
              borderColor={item === selected ? "brand.primary" : "white"}
              borderWidth={4}
              borderRadius={100}
              w="100%"
              h={{ base: "100%", md: "50%", xl: "25%" }}
              mx={index === 0 || index === 2 ? 0 : 2}
              onClick={() => setSelected(item)}
              cursor="pointer"
            >
              <Image src={item} borderRadius={100} />
            </Center>
          ))}
      </Flex>
    </>
  )
}

export default memo(ImageViewer)
