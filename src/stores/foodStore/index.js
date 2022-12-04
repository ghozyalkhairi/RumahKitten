import create from "zustand"
import foodData from "../../data/foodData.json"

const useFoodStore = create((set, get) => ({
  foodList: [],
  food: {},
  cartCount: 0,
  variant: "",

  actions: {
    setFood: (id) => {
      const foodList = get().foodList
      set({
        food: foodList.find((food) => food.id === parseInt(id)),
      })
    },
    setVariant: (variant) => set({ variant }),
    addToCart: () => {
      const cartCount = get().cartCount
      if (cartCount >= 10) return
      set((state) => ({ cartCount: state.cartCount + 1 }))
    },
    removeFromCart: () => {
      const cartCount = get().cartCount
      if (cartCount <= 0) return
      set((state) => ({ cartCount: state.cartCount - 1 }))
    },
    resetVariantCount: () => {
      set({ variant: "", cartCount: 0 })
    },
    fetchFood: () => {
      set({ foodList: foodData })
    },
    getFoodPrice: () => {
      const variant = get().variant
      const food = get().food
      if (variant === "S")
        return (
          "Rp " + food.harga.S.toLocaleString().replace(",", ".") + " / pack"
        )
      if (variant === "L")
        return (
          "Rp " + food.harga.L.toLocaleString().replace(",", ".") + " / pack"
        )
      return null
    },
  },
}))

export const useFoodList = () => useFoodStore((state) => state.foodList)
export const useVariant = () => useFoodStore((state) => state.variant)
export const useCartCount = () => useFoodStore((state) => state.cartCount)
export const useFood = () => useFoodStore((state) => state.food)
export const useFoodActions = () => useFoodStore((state) => state.actions)
