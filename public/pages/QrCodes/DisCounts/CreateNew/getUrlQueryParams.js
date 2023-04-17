let StartFunc = () => {
    var queryParams = {}, param;
    var params = decodeURI(window.location.search).substring(1).split("&");

    for (var i = 0; i < params.length; i++) {
        param = params[i].split('=');
        // console.log("param : ", param);
        if (param.length === 2) {
            queryParams[param[0]] = param[1];
        };
    }
    return queryParams;
};

export { StartFunc }