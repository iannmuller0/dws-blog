import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ListPage = lazy(
	() => import(/* webpackChunkName: "list" */ "../list/pages"),
);
const DetailsPage = lazy(
	() => import(/* webpackChunkName: "details" */ "../detail/pages"),
);

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ListPage />} />
				<Route path="/details/:id" element={<DetailsPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
