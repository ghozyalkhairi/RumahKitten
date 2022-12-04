import { memo } from "react"
import { Center } from "@chakra-ui/react"

function DecIcon({ width, height, onClick, isZero }) {
  return (
    <Center cursor="pointer" onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 12.998H5V10.998H19V12.998Z"
          fillOpacity={isZero ? "0.4" : "1"}
          fill="#FA902F"
        />
      </svg>
    </Center>
  )
}

DecIcon.defaultProps = {
  width: "25",
  height: "25",
}

export default memo(DecIcon)
