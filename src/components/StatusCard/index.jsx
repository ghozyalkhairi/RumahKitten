import { memo } from "react"
import { Center, Container, Flex, Spacer, Text } from "@chakra-ui/react"
import { useKittenSearch, useKittenLoading } from "../../stores/kittenStore"
import KittenIcon from "../../assets/icons/KittenIcon"

function StatusCard({ jumlahKitten, food, info, cart }) {
  const kittenSearch = useKittenSearch()
  const loading = useKittenLoading()
  if (cart)
    return (
      <Container
        bgColor="brand.accent"
        boxShadow="lg"
        borderRadius={15}
        py={5}
        px={4}
      >
        <Flex>
          <KittenIcon width={20} height={20} />
          <Spacer />
          <Text fontWeight="bold" color="brand.secondary">
            Keranjang Kamu
          </Text>
          <Spacer />
          <KittenIcon width={20} height={20} />
        </Flex>
      </Container>
    )
  return (
    <Container
      bgColor={!info && loading ? "brand.loading" : "brand.accent"}
      boxShadow="lg"
      borderRadius={15}
      p={4}
    >
      <Flex direction="column">
        <Flex>
          <KittenIcon width={20} height={20} />
          <Spacer />
          {info ? (
            <Text fontWeight="bold" color="brand.secondary">
              Tentang Rumah Kitten
            </Text>
          ) : (
            <Text fontWeight="bold" color="brand.secondary">
              {food ? "Rumah Kitten Food" : "Status Kitten"}
            </Text>
          )}
          <Spacer />
          <KittenIcon width={20} height={20} />
        </Flex>
        {!info && (
          <Center mt={4}>
            {loading ? (
              <Text color="brand.secondary">Sedang mencari kitten</Text>
            ) : (
              <Text color="brand.secondary">
                {food ? (
                  "Kitten pasti suka."
                ) : (
                  <>
                    <Text as="span" fontWeight="bold">
                      {jumlahKitten}
                    </Text>{" "}
                    {kittenSearch.length ? kittenSearch : "Kitten"} siap
                    diadopsi.
                  </>
                )}
              </Text>
            )}
          </Center>
        )}
        <Spacer />
      </Flex>
    </Container>
  )
}

export default memo(StatusCard)
