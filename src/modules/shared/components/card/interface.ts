export interface ICard {
	img: string;
	title: string;
	description: string;
	date: string;
	autorName: string;
	onClick: () => void;
	categories: [
		{
			createdAt: string;
			id: string;
			name: string;
			postId: string;
		},
	];
}
