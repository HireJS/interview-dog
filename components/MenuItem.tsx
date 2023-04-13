import { Link } from "@chakra-ui/next-js";
import { Text } from "@chakra-ui/react";

type Props = {
	children?: React.ReactNode;
	to?: string;
	rest?: any;
};

const MenuItem = ({ children, to = "/", ...rest }: Props) => {
	return (
		<Link href={to}>
			<Text display="block" {...rest}>
				{children}
			</Text>
		</Link>
	);
};

export default MenuItem;
