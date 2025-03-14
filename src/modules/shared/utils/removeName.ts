const removeName = (autorName: string) => {
    const partes = autorName.split(" ");
    if (partes.length > 1) {
        return partes.slice(1);
    }

    return autorName;
};

export default removeName;