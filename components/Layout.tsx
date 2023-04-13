import Head from "next/head";
import { Container } from "@chakra-ui/react";
import NavContainer from "./NavContainer";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Footer from "./Footer";

type Props = {
	children?: React.ReactNode;
	title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
	<>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<header>
			<NavContainer>
				<Logo />
				<NavLinks />
			</NavContainer>
		</header>
		<main>
			<Container maxW="container.lg">{children}</Container>
		</main>
		<Footer />
	</>
);

export default Layout;
