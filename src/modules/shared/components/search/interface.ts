export interface SearchProps {
  onSearch: (query: string) => void;
}

export interface SearchMobProps {
  onSearch: (query: string) => void;
  setIsExpanded: (value: boolean) => void;
  isExpanded: boolean;
}
