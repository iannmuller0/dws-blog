import type { IPost } from "../../list/pages/interface";

export const PostsService = {
	async fetchPosts(): Promise<IPost[]> {
		const response = await fetch("https://tech-test-backend.dwsbrazil.io/posts");

		//adicionar tratamento
		if (!response.ok) throw new Error("Falha ao buscar posts");
		return response.json();
	},
};
