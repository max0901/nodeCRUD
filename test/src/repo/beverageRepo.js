const query=require('../database/query');

exports.findAllBeverages=(connection)=>{
    return new Promise((resolve,reject)=>{
        const sql=query.findAllBeverages();
        connection.query(sql,(err,result)=>{
            if(err){
                console.log(err)
                reject(err)
            }
            console.log(result)
            resolve(result);
        })
    })
}
exports.findBevByBevCode=(connection,bevCode)=>{
return new Promise((resolve,reject)=>{
    const sql=query.findBevByBevCode(bevCode)
    connection.query(sql,(err,result)=>{
        if(err){
            reject(err)
        }
        resolve(result)
    })
})
}
exports.registBeverage=(connection,newBev)=>{
    return new Promise((resolve,reject)=>{
        const sql=query.registBeverage();
        console.log('newBev:'+newBev)
        connection.query(sql,[newBev.bevName,newBev.bevPrice],(err,result)=>{
            if(err){
                reject(err)
            }
            console.log(result)
            resolve(result)
        })
    })
}
exports.updateBeverage=(connection,updateBev)=>{
    return new Promise((resolve,reject)=>{
        const sql=query.updateBeverage();
        connection.query(sql,[updateBev.bevName,updateBev.bevPrice,updateBev.bevCode],(err,result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}
exports.deleteBeverage=(connection,bevCode)=>{
    
    return new Promise((resolve,reject)=>{
        const sql=query.deleteBeverage(bevCode)
        connection.query(sql,[bevCode],(err,result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
    }
