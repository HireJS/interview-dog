import { Link } from "@chakra-ui/next-js";
import Layout from "../components/Layout";

const IndexPage = () => (
	<Layout title="Home | Next.js + TypeScript Example">
		<h1>Hello Next.js 👋</h1>
		<p>
			<Link href="/about" color="blue.300" _hover={{ color: "blue.500" }}>
				About
			</Link>
		</p>
	</Layout>
);

export default IndexPage;
