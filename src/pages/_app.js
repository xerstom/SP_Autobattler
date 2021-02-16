import "../styles/globals.css";

import { ChakraProvider, theme } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function MyApp( { Component, pageProps } ) {
	return (
		<ChakraProvider resetCSS={true} theme={theme}>
			<Component {...pageProps }/>
		</ChakraProvider>
	);
}


export default MyApp;
