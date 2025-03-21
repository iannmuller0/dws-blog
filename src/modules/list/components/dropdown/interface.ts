import type { ReactNode } from "react";

export interface IDropdownProps {
	children: ReactNode;
	items: { name: string; id: string; onClick: () => void }[] | undefined;
}

export interface IIconWrapper {
	isOpen: boolean;
}
