import { Box, HStack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

const NavLinks = () => {
	return (
		<Box>
			<HStack spacing={8} align="center">
				<MenuItem to="/">Home</MenuItem>
				<MenuItem to="/about">About</MenuItem>
				<MenuItem to="/how">How It works</MenuItem>
			</HStack>
		</Box>
	);
};

export default NavLinks;
