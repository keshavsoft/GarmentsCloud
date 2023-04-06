let ReturnRowPK = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const RowPK = params.get("RowPK");
    const FromDelete = params.get("FromDelete");
    const FromSave = params.get("FromSave");

    return { RowPK, FromDelete, FromSave };
};

export { ReturnRowPK }
