import { memo } from "react"
import { useKittenList } from "../../stores/kittenStore"
import { useFoodList } from "../../stores/foodStore"
import KittenCard from "../KittenCard"

function KittenList({ kitten }) {
  const kittenList = useKittenList()
  const foodList = useFoodList()
  if (kitten)
    return (
      <>
        {kittenList.map((kitten) => (
          <KittenCard
            key={kitten.id}
            nama={kitten.nama}
            jk={kitten.jk}
            umur={kitten.umur}
            gambar={kitten.gambar}
            kittenId={kitten.id}
          />
        ))}
      </>
    )
  return (
    <>
      {foodList.map((food) => (
        <KittenCard
          key={food.id}
          foodNama={food.nama}
          foodDesc={food.desc}
          foodGambar={food.gambar}
          foodId={food.id}
        />
      ))}
    </>
  )
}

export default memo(KittenList)
