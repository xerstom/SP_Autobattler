import "../styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme( {
	components: {
	  Button: {
		// 1. We can update the base styles
			
		
			// 2. We can add a new button size or extend existing
			
			// 3. We can add a new visual variant
			variants: {
		  // 4. We can override existing variants
		  solid: () => {
					return {
						color: "white",
						bg: "gray.500",
						_hover: { bg: "gray.600" },
		  };
				},
			},
	  },
	},
} );
// eslint-disable-next-line react/prop-types
function MyApp( { Component, pageProps } ) {
	return (
		<ChakraProvider resetCSS={true} theme={theme}>
			<Component {...pageProps }/>
		</ChakraProvider>
	);
}


export default MyApp;
