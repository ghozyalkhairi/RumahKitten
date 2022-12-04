import create from "zustand"
import kittenData from "../../data/kittenData.json"

const useKittenStore = create((set, get) => ({
  kittenList: [],
  immutableKittenList: [],
  kittenBreedList: [],
  kitten: {},
  loading: true,
  kittenSearch: "",

  actions: {
    setLoading: (loading) => set({ loading }),
    setKitten: (id) => {
      const immutableKittenList = get().immutableKittenList
      set({
        kitten: immutableKittenList.find((cat) => cat.id === parseInt(id)),
      })
    },
    setKittenSearch: (search) => {
      const immutableKittenList = get().immutableKittenList
      set({ kittenSearch: search })
      if (search) {
        set({
          kittenList: immutableKittenList.filter(
            (kitten) => kitten.breed === search
          ),
        })
        return
      }
      set({ kittenList: immutableKittenList })
    },
    setKittenBreedList: () => {
      const immutableKittenList = get().immutableKittenList
      const breedList = immutableKittenList.map((kitten) => kitten.breed)
      const filteredBreedList = breedList.filter(
        (breed, index) => breedList.indexOf(breed) === index
      )
      set({ kittenBreedList: filteredBreedList })
    },
    resetKittenList: () => {
      const immutableKittenList = get().immutableKittenList
      set({ kittenList: immutableKittenList })
    },
    fetchKitten: () => {
      const setKittenBreedList = get().actions.setKittenBreedList
      set({ kittenList: kittenData, immutableKittenList: kittenData })
      setKittenBreedList()
    },
  },
}))

export const useKittenList = () => useKittenStore((state) => state.kittenList)
export const useKittenBreedList = () =>
  useKittenStore((state) => state.kittenBreedList)
export const useKitten = () => useKittenStore((state) => state.kitten)
export const useKittenSearch = () =>
  useKittenStore((state) => state.kittenSearch)
export const useKittenLoading = () => useKittenStore((state) => state.loading)
export const useKittenActions = () => useKittenStore((state) => state.actions)
