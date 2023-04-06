let ReturnRowPK = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const RowPK = params.get("RowPK");
    const ForUpload = params.get("ForUpload");

    return { RowPK, ForUpload };
};

export { ReturnRowPK }
