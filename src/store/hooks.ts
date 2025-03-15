import { useShallow } from "zustand/shallow";
import { usePostsStore } from ".";

export const usePostsActions = () => usePostsStore((state) => state.actions);
export const useLastPosts = () =>
	usePostsStore(useShallow((state) => state.postsList.slice(0, 3)));
