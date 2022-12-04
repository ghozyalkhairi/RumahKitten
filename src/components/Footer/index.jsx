import { memo } from "react";
import { Center, Text } from "@chakra-ui/react";

function Footer({ detail }) {
  return (
    <Center pt={4} pb={detail ? 6 : 20}>
      <Text fontSize="md" fontWeight="medium" color="brand.header">
        &copy; 2022 Rumah Kitten
      </Text>
    </Center>
  );
}

export default memo(Footer);
