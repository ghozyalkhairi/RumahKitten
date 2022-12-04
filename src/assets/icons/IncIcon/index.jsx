import { memo } from "react"
import { Center } from "@chakra-ui/react"

function IncIcon({ width, height, onClick, isMax }) {
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
          d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.998H13V10.998H19V12.998Z"
          fill="#FA902F"
          fillOpacity={isMax ? "0.4" : "1"}
        />
      </svg>
    </Center>
  )
}

IncIcon.defaultProps = {
  width: "25",
  height: "25",
}

export default memo(IncIcon)
