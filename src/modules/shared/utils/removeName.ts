const removeName = (authorName: string) => {
	const parts = authorName?.split(" ");
	if (parts?.length > 1) {
		return parts.slice(1);
	}

	return authorName;
};

export default removeName;
