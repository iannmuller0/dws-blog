// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
		body: {
			large: {
				size: number,
				lineHeight: string,
				weight: {
					regular: number,
					semiBold: number,
				},
			},
			small: {
				size: number,
				lineHeight: string,
				weight: {
					regular: number,
				},
			},
		},
	},
    colors: {
        neutral: {
            lightest: string,
            extraLight: string,
            light: string,
            medium: string,
            dark: string,
            extraDark: string,
            darkest: string,
        },
        primary: {
            light: string,
            medium: string,
            dark: string,
        },
        secondary: {
            light: string,
            medium: string,
            dark: string,
        },
        accent: {
            light: string,
            medium: string,
            dark: string,
        }
    }    
  }
}