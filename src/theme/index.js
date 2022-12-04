import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const colors = {
  brand: {
    primary: "#FA902F",
    secondary: "#F2F2F2",
    accent: "#25DD58",
    neutral: "#404040",
    header: "rgba(20,20,20,0.6)",
    loading: "#FFC700",
    nav: "rgba(256,256,256,0.8)",
  },
}

const fonts = {
  heading: `"Poppins", sans-serif`,
  body: `"Poppins", sans-serif`,
}

export const theme = extendTheme({ colors, config, fonts })
