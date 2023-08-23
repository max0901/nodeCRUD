const getConnection=require("../database/connection")
const BeverageRepo=require('../repo/beverageRepo')
exports.findAllBevarages=()=>{
    return new Promise((reslove,reject)=>{
        const connection=getConnection();
        const results=BeverageRepo.findAllBeverages(connection);
        console.log(results)
        connection.end()
        reslove(results);
    })
}

exports.findBevByBevCode=(bevCode)=>{
    return new Promise((reslove,reject)=>{
        const connection=getConnection();
        const results=BeverageRepo.findBevByBevCode(connection,bevCode);
      
        connection.end();
        reslove(results)
    })
}
exports.registBeverage=(beverage)=>{
    
    return new Promise(async(resolve,reject)=>{
        const connection=getConnection();
        connection.beginTransaction();
        try {
            const result= await BeverageRepo.registBeverage(connection,beverage)
            console.log(result);
            const insertedBev=await BeverageRepo.findBevByBevCode(connection,result.id)
        
            connection.commit();
            resolve(insertedBev)
        } catch (err) {
            connection.rollback();
            reject(err)
        }finally{
            connection.end();
            console.log('connection close')
        }
    })
}
exports.updateBeverage=(beverage)=>{
    return new Promise(async(resolve,reject)=>{
        const connection=getConnection();
        connection.beginTransaction();
        try {
            const result=await BeverageRepo.updateBeverage(connection,beverage)
            const updateBev=await BeverageRepo.findBevByBevCode(connection,result)
            connection.commit();
            resolve(updateBev)
        } catch (err) {
            connection.rollback();
            reject(err)
        }finally{
            connection.end();

        }
    })
}
exports.deleteBeverage=(bevCode)=>{
    return new Promise((reslove,reject)=>{
        const connection=getConnection();
        const results=BeverageRepo.deleteBeverage(connection,bevCode);
      
        connection.end();
        reslove(results)
    })
}