import { memo } from "react"
import { Center, Select } from "@chakra-ui/react"
import {
  useKittenBreedList,
  useKittenSearch,
  useKittenActions,
  useKittenLoading,
} from "../../stores/kittenStore"

function Search() {
  const breedList = useKittenBreedList()
  const kittenSearch = useKittenSearch()
  const loading = useKittenLoading()
  const { setKittenSearch } = useKittenActions()
  const onChange = (e) => setKittenSearch(e.target.value)
  return (
    <Center w="100%" pb={1}>
      <Select
        value={kittenSearch.length ? kittenSearch : ""}
        placeholder="Pilih ras kitten"
        onChange={onChange}
        disabled={loading}
      >
        {breedList.length &&
          breedList.map((breed) => (
            <option key={breed.trim()} value={breed}>
              {breed}
            </option>
          ))}
      </Select>
    </Center>
  )
}

export default memo(Search)
