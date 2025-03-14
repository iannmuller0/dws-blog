const convertPXToVH = (px: number) => {
	return `${(px * 100) / document.documentElement.clientHeight}vh`;
};

export default convertPXToVH;
