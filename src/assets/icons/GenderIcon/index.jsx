import { Center } from "@chakra-ui/react"
import { memo } from "react"

function GenderIcon({ width, height, fill, jk }) {
  if (jk === "Betina")
    return (
      <Center>
        <svg
          width={width}
          height={height}
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4706 34V30.2353H11.7059V26.4706H15.4706V22.5176C12.9922 22.0784 10.9611 20.8938 9.37741 18.9638C7.79247 17.035 7 14.8 7 12.2588C7 9.40392 8.01208 6.98071 10.0362 4.98918C12.0591 2.99639 14.498 2 17.3529 2C20.2078 2 22.6467 2.99639 24.6696 4.98918C26.6938 6.98071 27.7059 9.40392 27.7059 12.2588C27.7059 14.8 26.914 17.035 25.3304 18.9638C23.7454 20.8938 21.7137 22.0784 19.2353 22.5176V26.4706H23V30.2353H19.2353V34H15.4706ZM17.3529 18.9412C19.1725 18.9412 20.7255 18.298 22.0118 17.0118C23.298 15.7255 23.9412 14.1725 23.9412 12.3529C23.9412 10.5333 23.298 8.98039 22.0118 7.69412C20.7255 6.40784 19.1725 5.76471 17.3529 5.76471C15.5333 5.76471 13.9804 6.40784 12.6941 7.69412C11.4078 8.98039 10.7647 10.5333 10.7647 12.3529C10.7647 14.1725 11.4078 15.7255 12.6941 17.0118C13.9804 18.298 15.5333 18.9412 17.3529 18.9412Z"
            fill={fill}
          />
        </svg>
      </Center>
    )
  return (
    <Center>
      <svg
        width={width}
        height={height}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.1666 5.83333V14.5833H26.25V10.8281L20.4531 16.5885C20.9149 17.2691 21.2673 17.9919 21.5104 18.7571C21.7535 19.5232 21.875 20.3194 21.875 21.1458C21.875 23.3819 21.0972 25.2778 19.5416 26.8333C17.9861 28.3889 16.0903 29.1667 13.8541 29.1667C11.618 29.1667 9.7222 28.3889 8.16665 26.8333C6.61109 25.2778 5.83331 23.3819 5.83331 21.1458C5.83331 18.9097 6.61109 17.0139 8.16665 15.4583C9.7222 13.9028 11.618 13.125 13.8541 13.125C14.6562 13.125 15.4462 13.2407 16.2239 13.4721C17.0017 13.7025 17.7187 14.0608 18.375 14.5469L24.1719 8.74999H20.4166V5.83333H29.1666ZM13.8541 16.0417C12.4444 16.0417 11.2413 16.5399 10.2448 17.5365C9.24824 18.533 8.74998 19.7361 8.74998 21.1458C8.74998 22.5556 9.24824 23.7587 10.2448 24.7552C11.2413 25.7517 12.4444 26.25 13.8541 26.25C15.2639 26.25 16.467 25.7517 17.4635 24.7552C18.4601 23.7587 18.9583 22.5556 18.9583 21.1458C18.9583 19.7361 18.4601 18.533 17.4635 17.5365C16.467 16.5399 15.2639 16.0417 13.8541 16.0417Z"
          fill={fill}
        />
      </svg>
    </Center>
  )
}

GenderIcon.defaultProps = {
  width: "35",
  height: "35",
  fill: "#101010",
}

export default memo(GenderIcon)