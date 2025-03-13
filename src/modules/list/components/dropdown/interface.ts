import type { ReactNode } from "react";

export interface IDropdownProps {
	children: ReactNode;
	items: { label: string; onClick: () => void }[];
}

export interface IIconWrapper {
    isOpen: boolean;
  }