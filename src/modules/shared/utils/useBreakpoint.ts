import { useCallback, useEffect, useState } from "react";

const useScreenSize = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	const checkScreenSize = useCallback(() => {
		const mobileBreakpoint = 768;
		setIsMobile(window.innerWidth < mobileBreakpoint);
	}, []);

	useEffect(() => {
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, [checkScreenSize]);

	return isMobile;
};

export default useScreenSize;
