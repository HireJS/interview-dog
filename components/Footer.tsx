import { Container, Flex, Text } from "@chakra-ui/react";
import Logo from "./Logo";

const Footer = () => {
	return (
		<Container
			as="footer"
			role="contentinfo"
			maxW="full"
			color="gray.200"
			bg="gray.800"
			position="fixed"
			bottom="0"
			left="0"
			right="0"
		>
			<Flex
				align="center"
				justify="space-between"
				wrap="wrap"
				w="100%"
				p={4}
			>
				<Logo />
				<Text fontSize="sm" color="subtle">
					&copy; {new Date().getFullYear()} Interview Dog. All rights
					reserved.
				</Text>
			</Flex>
		</Container>
	);
};

export default Footer;
