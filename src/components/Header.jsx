import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <Box bg="gray.100" p={4} boxShadow="md">
      <Flex justify="flex-end">
        <IconButton aria-label="Cart" icon={<FaShoppingCart />} variant="outline" />
      </Flex>
    </Box>
  );
}

export default Header;
