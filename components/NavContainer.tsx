import { Flex } from "@chakra-ui/react";

type Props = {
	children?: React.ReactNode;
};

const NavContainer = ({ children }: Props) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={4}
			p={4}
			color="gray.200"
			bg="gray.800"
		>
			{children}
		</Flex>
	);
};

export default NavContainer;
