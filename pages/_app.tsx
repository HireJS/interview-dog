import type { AppProps } from "next/app";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
};

const theme = extendTheme({ colors });

export default function MyApp({
	Component,
	pageProps,
}: AppProps<{
	initialSession: Session;
}>) {
	// Create a new supabase browser client on every first render.
	const [supabase] = useState(() => createBrowserSupabaseClient());

	return (
		<SessionContextProvider
			supabaseClient={supabase}
			initialSession={pageProps.initialSession}
		>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</SessionContextProvider>
	);
}
