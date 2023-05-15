import { StartFunc as TableRowStartFunc } from "../../../FetchFuncs/HtmlPullQrCode/SameQrcodes/TableRow.js";
import { StartFunc as TableHeadStartFunc } from "../../../FetchFuncs/HtmlPullQrCode/SameQrcodes/TableHead.js";

let StartFunc = async ({ inData }) => {
    await ShowOnDomTableHeader();
    await ShowOnDomTableBody({ inData });
 //   ShowOnDomTableFoot({ inData: jVarLocalFilteredData });
};

// SameQrCodesTableFootCostPriceId

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalHtmlId = "TableBodyId";

    let jVarLocalTableBodyId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTableBodyId === null === false) {
        if (jVarLocalTemplate.KTF) {
            var template = Handlebars.compile(jVarLocalTemplate.HtmlString);
            let jVarLocalLoopIndex = 1;

            inData.forEach(element => {
                element.KSNo = jVarLocalLoopIndex;
                let jVarLocalToShowHtml = template(element);

                jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
                jVarLocalLoopIndex += 1;
            });
        };
    };
};

let ShowOnDomTableFoot = ({ inData }) => {
    let jVarLocalHtmlId = "SameQrCodesTableFootCostPriceId";
    let jVarLocalCostPriceArray = inData.map(element => {
        return element.CostPrice;
    });

    let jVarLocalTableBodyId = document.getElementById(jVarLocalHtmlId);

    const sum = jVarLocalCostPriceArray.reduce((a, b) => a + b, 0);

    if (jVarLocalTableBodyId === null === false) {
        jVarLocalTableBodyId.innerHTML = sum;
    };

    ShowOnDomTableFootSaleValue({ inData });
};

let ShowOnDomTableFootSaleValue = ({ inData }) => {
    let jVarLocalHtmlId = "SameQrCodesTableFootSalePriceId";

    let jVarLocalCostPriceArray = inData.map(element => {
        return element.SalePrice;
    });

    let jVarLocalSoldArray = inData.filter(element => element.isSold);

    let jVarLocalSoldGrossAmout = jVarLocalSoldArray.map(element => {
        return element.SoldGrossAmout;
    });

    let jVarLocalTableBodyId = document.getElementById(jVarLocalHtmlId);

    const sum = jVarLocalCostPriceArray.reduce((a, b) => a + b, 0);
    const SoldGrossAmoutTotal = jVarLocalSoldGrossAmout.reduce((a, b) => a + b, 0);

    if (jVarLocalTableBodyId === null === false) {
        jVarLocalTableBodyId.innerHTML = `${SoldGrossAmoutTotal} / ${sum}`;
    };
};

let ShowOnDomTableHeader = async () => {
    let jVarLocalHtmlId = "TableHeadId";
    let jVarLocalTableHeadId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalHeadHtml = await TableHeadStartFunc();
    if (jVarLocalTableHeadId === null === false) {
        if (jVarLocalHeadHtml.KTF) {
            jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
        };
    };
};

export { StartFunc };