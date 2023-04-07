let ReturnRowPK = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const RowPK = params.get("RowPK");
    const ToProducts = params.get("ToProducts");

    return { RowPK, ToProducts };
};

export { ReturnRowPK }
