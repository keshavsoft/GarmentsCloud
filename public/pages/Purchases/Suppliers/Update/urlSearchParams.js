let ReturnData = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const RowPK = params.get("RowPK");
    const SupplierName = params.get("inSupplierName");
    const AliasName = params.get("inAliasName");
    const City = params.get("City");
    const GST = params.get("GST");
    const Phone = params.get("Phone");

    return { RowPK, SupplierName, AliasName, City, GST, Phone };
};


export { ReturnData }
