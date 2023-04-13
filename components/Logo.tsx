import { Box, Text } from "@chakra-ui/react";

type Props = {
	children?: React.ReactNode;
};

const Logo = (props: Props) => {
	return (
		<Box {...props}>
			<Text fontSize="lg" fontWeight="bold">
				Interview Dog
			</Text>
		</Box>
	);
};

export default Logo;
