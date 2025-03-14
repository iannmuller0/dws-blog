const convertPXToVW = (px: number) => {
	const value = document ? document.documentElement.clientWidth : 320;
	return `${(px * 100) / value}vw`;
};

export default convertPXToVW;
