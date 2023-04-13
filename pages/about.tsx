import { Link } from "@chakra-ui/next-js";
import Layout from "../components/Layout";

const AboutPage = () => (
	<Layout title="About | Next.js + TypeScript Example">
		<h1>About</h1>
		<p>This is the about page</p>
		<p>
			<Link href="/" color="blue.300" _hover={{ color: "blue.500" }}>
				Go home
			</Link>
		</p>
	</Layout>
);

export default AboutPage;
