let express = require("express");
let router = express.Router();

let Repo = require("../../../../Repository/Validate/Users/InUserGroupsJson/ForUserNameAndPassword")
let CommonjwtFunc = require("../../../../../../common/Jwt/Bs5");
let CommonControllers = require("../../../../controllers/Validate/Users/InUserGroupsJson/ForUserNameAndPassword.Controllers")

router.post('/TokenToCookie', (req, res,) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;

    Repo.ForUserAndPasswordReturnFirmDetails({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
    }).then(PromiseData => {
        if (PromiseData.KTF === false) {
            res.json(PromiseData);
        } else {
            if (PromiseData.kPK > 0) {
                CommonjwtFunc.CreateToken({
                    inUserName: LocalUserName,
                    inDataPk: PromiseData.kPK
                }).then((PromiseDataFromJwt) => {
                    res.cookie('KToken', PromiseDataFromJwt, { maxAge: 900000, httpOnly: false });

                    PromiseData.KTF = true;

                    res.json(PromiseData);
                });
            };
        };
    });
});

// router.post('/TokenToCookieFirmDetailsAlso', CommonControllers.TokenToCookieFirmDetailsAlso);

// router.post('/LoginCheckReturnTokenOnly', (req, res,) => {
//     if ("inUserName" in req.body) {
//         if ("inPassWord" in req.body) {

//             let LocalUserName = req.body.inUserName;
//             let LocalPassWord = req.body.inPassWord;

//             // Repo.ForUserAndPassword({
//             //     inUserName: LocalUserName,
//             //     inPassWord: LocalPassWord,
//             // }).then(PromiseData => {
//             //     if (PromiseData.kPK > 0) {
//             //         CommonjwtFunc.CreateToken({
//             //             inUserName: LocalUserName,
//             //             inDataPk: PromiseData.kPK
//             //         }).then((PromiseDataFromJwt) => {
//             //             res.end(PromiseDataFromJwt);
//             //         });
//             //     };
//             // });



//             Repo.ForUserAndPasswordReturnFirmDetails({
//                 inUserName: LocalUserName,
//                 inPassWord: LocalPassWord,
//             }).then(PromiseData => {
//                 if (PromiseData.KTF === false) {
//                     res.json(false);
//                 } else {
//                     if (PromiseData.kPK > 0) {
//                         CommonjwtFunc.CreateToken({
//                             inUserName: LocalUserName,
//                             inDataPk: PromiseData.kPK
//                         }).then((PromiseDataFromJwt) => {
//                             res.json(PromiseDataFromJwt);
//                         });
//                     };
//                 };
//             })

//         } else {
//             res.json({ KTF: false, KReason: "Need to send inUserName!" });
//         };
//     } else {
//         res.json({ KTF: false, KReason: "Need to send inPassWord!" });
//     };
// });

module.exports = router;