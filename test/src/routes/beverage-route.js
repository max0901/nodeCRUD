const express=require('express');
const router=express.Router();
const BeverageController=require('../controller/beverageController')
router.get('/',BeverageController.findAllBeverages);
router.get('/:bevCode',BeverageController.findBevByBevCode);
router.post('/',BeverageController.registBeverage);
router.put('/',BeverageController.updateBeverage);
router.delete('/',BeverageController.deleteBeverage);
module.exports=router;