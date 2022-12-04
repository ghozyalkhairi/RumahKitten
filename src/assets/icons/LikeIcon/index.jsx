import { Center } from "@chakra-ui/react"
import { memo, useState } from "react"

function LikeIcon({ width, height, fill }) {
  const [clicked, setClicked] = useState(false)
  const onClick = () => setClicked(!clicked)
  return (
    <Center cursor="pointer" onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 50 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 41.8104L21.9792 39.2254C11.25 30.08 4.16666 24.0288 4.16666 16.6458C4.16666 10.5946 9.20832 5.875 15.625 5.875C19.25 5.875 22.7292 7.46125 25 9.94833C27.2708 7.46125 30.75 5.875 34.375 5.875C40.7917 5.875 45.8333 10.5946 45.8333 16.6458C45.8333 24.0288 38.75 30.08 28.0208 39.2254L25 41.8104Z"
          fill={clicked ? "#FF0000" : fill}
        />
      </svg>
    </Center>
  )
}

LikeIcon.defaultProps = {
  width: "50",
  height: "47",
  fill: "white",
}

export default memo(LikeIcon)
