const BeverageService=require('../service/beverageService')
const HttpStatus=require('http-status')
exports.findAllBeverages=async (req,res,next)=>{
    const beverages=await BeverageService.findAllBevarages();
    console.log(beverages)
    res.status(HttpStatus.OK).send({
        status:200,
        message:'ok',
        result:beverages
    })
}
exports.findBevByBevCode=async(req,res,next)=>{
    const beverages=await BeverageService.findBevByBevCode(req.params.bevCode);
    if(beverages&&beverages.length>0){
        res.status(HttpStatus.OK).send({
            status:HttpStatus.OK,
            message:'ok',
            result:beverages
        })
    }
 
}
exports.registBeverage=async(req,res,next)=>{
    const beverage=req.body;
    console.log('b:'+beverage)
    const beverages=await BeverageService.registBeverage(beverage);
    res.status(HttpStatus.OK).send({
        status:200,
        message:'ok',
        result:beverages
    })
}
exports.updateBeverage=async(req,res,next)=>{
    const beverage=req.body;
    const beverages=await BeverageService.updateBeverage(beverage);
    res.status(HttpStatus.OK).send({
        status:200,
        message:'ok',
        result:beverages
    })
}
exports.deleteBeverage=async(req,res)=>{
    const beverage=req.body;
    const beverages=await BeverageService.deleteBeverage(beverage.bevCode);
    res.status(HttpStatus.OK).send({
        status:200,
        message:'ok',
        result:beverages
    })
}