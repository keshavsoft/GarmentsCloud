const multer = require('multer');
let CommonFromCreateRowPkAsFolder = require("../CreateRowPkAsFolder");
let CommonFromCheckRowPkAsFolder = require("../CheckRowPkAsFolder");

let StartFunc = ({ req }) => {
    console.log("ssssssssss : ", req.file);
    let LocalReturnData = { KTF: false, DirPath: "", CreatedLog: {} };

    let LocalFromCommonFromCheckRowPkAsFolder = CommonFromCheckRowPkAsFolder.ForExistence({
        inFolderName: req.body.inFolderName,
        inFileNameOnly: req.body.inFileNameOnly,
        inItemName: req.body.inItemName,
        inRowPk: req.body.inRowPk,
        inDataPK: req.KeshavSoft.DataPk
    });

    if (LocalFromCommonFromCheckRowPkAsFolder.KTF === false) {
        LocalReturnData.KReason = LocalFromCommonFromCheckRowPkAsFolder.KReason;
        return LocalReturnData;
    };

    try {
        if (fs.existsSync(`${LocalFromCommonFromCheckRowPkAsFolder.RowPkAsFolderPath}/${req.file.originalname}`)) {
            LocalReturnData.KTF = true;
        } else {
            LocalReturnData.KReason = "Images Folder not found!";
        }
    } catch (error) {
        LocalReturnData.KReason = "Images Folder not found!";
    };

    console.log("nnnnnnnnnnnn : ", LocalReturnData);
};

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //   console.log("bbbbbbbb : ", req.body);
        let LocalFromCommonFromCheck = CommonFromCreateRowPkAsFolder.StartFunc({
            inFolderName: req.body.inFolderName,
            inFileNameOnly: req.body.inFileNameOnly,
            inItemName: req.body.inItemName,
            inRowPk: req.body.inRowPk,
            inDataPK: req.KeshavSoft.DataPk
        });
        console.log("LocalFromCommonFromCheck : ", LocalFromCommonFromCheck);
        if (LocalFromCommonFromCheck.KTF) {
            cb(null, LocalFromCommonFromCheck.RowPkAsFolderPath);
        };

        //cb(null, "Images");
    },
    filename: function (req, file, cb) {
        // let LocalFromCommonFromCheck = CommonFromCheck.ForExistence({
        //     inFolderName: "Masters",
        //     inFileNameOnly: "Items",
        //     inItemName: "ItemName",
        //     inDataPK: 901
        // });

        //  console.log("req---------- : ", LocalFromCommonFromCheck, file);
        // if (LocalFromCommonFromCheck.KTF) {
        //     cb(null,  file.originalname);
        // };
        //  let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        //cb(null, Date.now() + ext);
        //  cb(null, Date.now() + path.extname(file.originalname));
        //cb(null, req.body.nspeakers + path.extname(file.originalname));

        // cb(null, req.KeshavSoft + path.extname(file.originalname));
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });

module.exports = { StartFunc };
