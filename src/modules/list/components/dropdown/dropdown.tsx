import { useState, useRef, useEffect, useCallback } from "react";
import type { IDropdownProps } from "./interface";
import { Header, IconWrapper, Li, Ul } from "./dropdown.styles";
import SvgAngleDown from "../../../../assets/icons/angleDown";
import SvgClose from "../../../../assets/icons/close";

const Dropdown = ({ children, items }: IDropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItems, setSelectedItems] = useState<string[]>([]);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = useCallback(() => setIsOpen(!isOpen), [isOpen]);

	const handleClickOutside = useCallback((event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleClickOutside]);

	const handleItemClick = (name: string, onClick: () => void) => {
		if (selectedItems.includes(name)) {
			const newSelected = selectedItems.filter((item) => item !== name);
			setSelectedItems(newSelected);
		} else {
			setSelectedItems([...selectedItems, name]);
		}
		onClick();
	};

	const handleHeaderIcon = () => {
		return selectedItems.length > 0 ? (
			<div onClick={() => setSelectedItems([])}>
				<SvgClose />
			</div>
		) : (
			<IconWrapper isOpen={isOpen}>
				<SvgAngleDown />
			</IconWrapper>
		);
	};

	return (
		<div ref={dropdownRef}>
			<Header type="button" onClick={toggleDropdown}>
				<span>{selectedItems.length > 0 ? selectedItems.join(", ") : children}</span>
				{handleHeaderIcon()}
			</Header>

			{isOpen && (
				<Ul>
					{items.map((item) => (
						<Li
							key={item.id}
							onClick={() => handleItemClick(item.name, item.onClick)}
						>
							{item.name}
						</Li>
					))}
				</Ul>
			)}
		</div>
	);
};

export default Dropdown;
