export interface IPost {
	author: {
		createdAt: string;
		id: string;
		name: string;
		profilePicture: string;
		updatedAt: string;
	};
	authorId: string;
	categories: [
		{
			createdAt: string;
			id: string;
			name: string;
			postId: string;
			updatedAt: string;
		},
	];
	content: string;
	createdAt: string;
	id: string;
	thumbnail_url: string;
	title: string;
	updatedAt: string;
}
