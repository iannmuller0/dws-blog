import type { IPost } from "../../pages/interface";

export interface IFilter {
	categoryList?: { name: string; id: string; onClick: () => void }[];
	authorList?: { name: string; id: string; onClick: () => void }[];
	handleSort?: (oldest: boolean) => IPost[];
}
