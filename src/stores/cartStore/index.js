import create from "zustand"

const useCartStore = create((set, get) => ({
  userCart: {
    foods: [],
    cats: [],
  },

  actions: {
    addToUserCart: (item, type, porsi, count) => {
      const userCart = get().userCart
      if (type === "kitten") {
        const catsCopy = [...userCart.cats, item]
        set({
          userCart: {
            ...userCart,
            cats: [...new Map(catsCopy.map((cat) => [cat.id, cat])).values()],
          },
        })
      }
      if (type === "food") {
        const isExists = userCart.foods.some((food) => food.porsi === porsi)
        if (isExists) {
          const existingFood = userCart.foods.find(
            (food) => food.porsi === porsi
          )
          existingFood.jumlah = count
          const foodsCopy = [...userCart.foods, existingFood]
          set({
            userCart: {
              ...userCart,
              foods: [
                ...new Map(
                  foodsCopy.map((food) => [food.porsi, food])
                ).values(),
              ],
            },
          })
          return
        }
        set({
          userCart: {
            ...userCart,
            foods: [...userCart.foods, item],
          },
        })
      }
    },
    removeFromUserCart: (id, type) => {
      const userCart = get().userCart
      const { cats, foods } = get().userCart
      if (type === "cat")
        set({
          userCart: {
            ...userCart,
            cats: cats.filter((item) => item.id !== id),
          },
        })
      if (type === "food")
        set({
          userCart: {
            ...userCart,
            foods: foods.filter((item) => item.porsi !== id),
          },
        })
    },
    incrementFood: (porsi, jumlah) => {
      if (jumlah >= 10) return
      const userCart = get().userCart
      const foodToInc = userCart.foods.find((food) => food.porsi === porsi)
      foodToInc.jumlah++
      const foodsCopy = [...userCart.foods, foodToInc]
      set({
        userCart: {
          ...userCart,
          foods: [
            ...new Map(foodsCopy.map((food) => [food.porsi, food])).values(),
          ],
        },
      })
    },
    decrementFood: (porsi, jumlah) => {
      if (jumlah <= 1) return
      const userCart = get().userCart
      const foodToInc = userCart.foods.find((food) => food.porsi === porsi)
      foodToInc.jumlah--
      const foodsCopy = [...userCart.foods, foodToInc]
      set({
        userCart: {
          ...userCart,
          foods: [
            ...new Map(foodsCopy.map((food) => [food.porsi, food])).values(),
          ],
        },
      })
    },
    getTotalPrice: () => {
      const userCart = get().userCart
      const variantS = userCart.foods.some((food) => food.porsi === "S")
      const variantL = userCart.foods.some((food) => food.porsi === "L")
      if (variantS && !variantL)
        return (
          "Rp " +
          (
            userCart.foods.find((food) => food.porsi === "S").jumlah *
            userCart.foods.find((food) => food.porsi === "S").harga
          )
            .toLocaleString()
            .replace(",", ".")
        )
      if (!variantS && variantL)
        return (
          "Rp " +
          (
            userCart.foods.find((food) => food.porsi === "L").jumlah *
            userCart.foods.find((food) => food.porsi === "L").jumlah.harga
          )
            .toLocaleString()
            .replace(",", ".")
        )
      const variantSPrice =
        userCart.foods.find((food) => food.porsi === "S").jumlah *
        userCart.foods.find((food) => food.porsi === "S").harga
      const variantLPrice =
        userCart.foods.find((food) => food.porsi === "L").jumlah *
        userCart.foods.find((food) => food.porsi === "L").harga
      return (
        "Rp " +
        (variantSPrice + variantLPrice).toLocaleString().replace(",", ".")
      )
    },
    getWhatsAppMessageLink: () => {
      const userCart = get().userCart
      const phoneNumber = "+6281234567891" // * Nomor WhatsApp
      const baseURL = `https://wa.me/${phoneNumber}?text=`
      const messageOpener = "Halo Rumah Kitten, ini adalah pesanan saya:"

      if (userCart.cats.length && !userCart.foods.length) {
        const adopsiMessage = `%0aAdopsi: %0a ${userCart.cats
          .map((cat) => `- ${cat.nama} (${cat.breed}, ${cat.jk})`)
          .join("%0a")}`
        return baseURL + messageOpener + adopsiMessage
      }

      if (userCart.foods.length && !userCart.cats.length) {
        const foodMessage = `%0aMakanan: %0a ${userCart.foods
          .map(
            (food) =>
              `- ${food.nama} (Porsi ${food.porsi}), ${food.jumlah} pack`
          )
          .join("%0a")}`
        const getTotalPrice = get().actions.getTotalPrice
        const totalHarga = `%0aTotal harga makanan: ${getTotalPrice()}`
        return baseURL + messageOpener + foodMessage + totalHarga
      }

      const adopsiMessage = `%0aAdopsi: %0a ${userCart.cats
        .map((cat) => `- ${cat.nama} (${cat.breed}, ${cat.jk})`)
        .join("%0a")}`
      const foodMessage = `%0aMakanan: %0a ${userCart.foods
        .map(
          (food) => `- ${food.nama} (Porsi ${food.porsi}), ${food.jumlah} pack`
        )
        .join("%0a")}`
      const getTotalPrice = get().actions.getTotalPrice
      const totalHarga = `%0aTotal harga makanan: ${getTotalPrice()}`
      return baseURL + messageOpener + adopsiMessage + foodMessage + totalHarga
    },
  },
}))

export const useUserCart = () => useCartStore((state) => state.userCart)
export const useCartActions = () => useCartStore((state) => state.actions)
