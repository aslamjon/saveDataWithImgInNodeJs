const { Router } = require('express');
const {
    getAllData,
    getDataById,
    createData,
    updateProduct,
    deleteProduct,
    getAllImages
} = require('../controller/dataControler')

const router = Router()

const multer = require("multer");
const upload = multer({
    dest: "/home/pi/Coding/Github/test/data/cache"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});


router.get('/', getAllData);
router.get('/:id', getDataById);
router.get('/allImages', getAllImages);
router.post('/', upload.single("file" /* name attribute of <file> element in your form */), createData);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = {
    dataRouter: router
}
