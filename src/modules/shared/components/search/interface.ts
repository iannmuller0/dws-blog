export interface ISearchProps {
	onSearch: (query: string) => void;
}

export interface ISearchMobProps {
	onSearch: (query: string) => void;
	setIsExpanded: (value: boolean) => void;
	isExpanded: boolean;
}
