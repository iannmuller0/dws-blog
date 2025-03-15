import { create } from "zustand";
import type { IPost } from "../modules/list/pages/interface";
import { PostsService } from "../modules/shared/services/PostsService";

interface PostsState {
	postsList: IPost[];
	loading: boolean;
	error: string | null;
	actions: {
		fetchPosts: () => Promise<void>;
		setPosts: (postsList: IPost[]) => void;
	};
}

export const usePostsStore = create<PostsState>((set) => ({
	postsList: [],
	loading: false,
	error: null,

	actions: {
		fetchPosts: async () => {
			set({ loading: true, error: null });
			try {
				const postsList = await PostsService.fetchPosts();
				set({ postsList, loading: false });
			} catch (error) {
				const message = error instanceof Error ? error.message : "error";
				set({ error: message, loading: false });
			}
		},

		setPosts: (newPosts) => set({ postsList: newPosts }),
	},
}));
