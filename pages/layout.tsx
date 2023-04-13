import { ReactNode } from "react";
import { Providers } from "./providers";

type Props = {
	children?: ReactNode;
};

const RootLayout = ({ children }: Props) => (
	<html lang="en">
		<body>
			<Providers>{children}</Providers>
		</body>
	</html>
);

export default RootLayout;
