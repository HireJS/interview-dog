import { Auth } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Layout from "../components/Layout";
import Account from "../components/Account";

const IndexPage = () => {
	const session = useSession();
	const supabase = useSupabaseClient();
	return (
		<Layout title="Home | Next.js + TypeScript Example">
			{!session ? (
				<Auth
					supabaseClient={supabase}
					appearance={{ theme: ThemeSupa }}
				/>
			) : (
				<Account session={session} />
			)}
		</Layout>
	);
};

export default IndexPage;
