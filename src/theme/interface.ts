export interface theme {
	typography: {
		body: {
			large: {
				size: number;
				lineHeight: string;
				weight: {
					regular: number;
					semiBold: number;
				};
			};
			small: {
				size: number;
				lineHeight: string;
				weight: {
					regular: number;
				};
			};
		};
		caption: {
			size: number;
			lineHeight: string;
			weight: {
				regular: number;
			};
		};
		h1: {
			size: number;
			lineHeight: string;
			weight: {
				Bold: number;
			};
		};
		h2: {
			size: number;
			lineHeight: string;
			weight: {
				Bold: number;
			};
		};
		h3: {
			size: number;
			lineHeight: string;
			weight: {
				Bold: number;
			};
		};
	};
	colors: {
		neutral: {
			lightest: string;
			extraLight: string;
			light: string;
			medium: string;
			dark: string;
			extraDark: string;
			darkest: string;
		};
		primary: {
			light: string;
			medium: string;
			dark: string;
		};
		secondary: {
			light: string;
			medium: string;
			dark: string;
		};
		accent1: {
			light: string;
			medium: string;
			dark: string;
		};
	};
}
