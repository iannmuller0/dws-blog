import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import { dwsBLogTheme } from "./theme/theme.ts";

createRoot(document.getElementById("root") as Element).render(
	<StrictMode>
		<ThemeProvider theme={dwsBLogTheme}>
			<App />
		</ThemeProvider>
	</StrictMode>,
);
