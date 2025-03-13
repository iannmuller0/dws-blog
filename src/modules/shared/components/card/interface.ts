export interface ICard {
	img: string;
	title: string;
	description: string;
	date: string;
	autorName: string;
	categories: [
		{
			createdAt: string;
			id: string;
			name: string;
			postId: string;
			updatedAt: string;
		},
	];
}
