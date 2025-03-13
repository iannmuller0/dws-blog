//criar um mapper para n aceitar valores fora dos existentes

import type { theme } from "./interface";

export const dwsBLogTheme: theme = {
	typography: {
		body: {
			large: {
				size: 16,
				lineHeight: "150%",
				weight: {
					regular: 400,
					semiBold: 600,
				},
			},
			small: {
				size: 14,
				lineHeight: "150%",
				weight: {
					regular: 400,
				},
			},
		},
	},
    colors: {
        neutral: {
            lightest: '#f0f0f2',
            extraLight: '#e0e2e6',
            light: '#c0c2c8',
            medium: '#9ea0a5',
            dark: '#7f8185',
            extraDark: '#5e5f63',
            darkest: '#202122',
        },
        primary: {
            light: '#0b0e3a',
            medium: '#060725',
            dark: '#020318',
        },
        secondary: {
            light: '#ef4c84',
            medium: '#d31450',
            dark: '#8c1038',
        },
        accent: {
            light: '#00bfc1',
            medium: '#009598',
            dark: '#006c6e',
        }
    }
};
