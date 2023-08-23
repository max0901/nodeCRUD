exports.findAllBeverages=()=>{
    return `
        SELECT * 
            FROM BEVERAGE
    `
}
exports.findBevByBevCode=(bevCode)=>{
    return`
        SELECT *
         FROM BEVERAGE
         WHERE bev_code='${bevCode}'

    `
}
exports.registBeverage=()=>{
    return`
        INSERT
            INTO BEVERAGE
            (bev_name,bev_price) 
            VALUES
            (?,?)
    `
}
exports.updateBeverage=()=>{
    return`
        UPDATE   
            BEVERAGE
            SET 
                bev_name=?,
                bev_price=?
            WHERE bev_code=?
    `
}
exports.deleteBeverage=()=>{
    return`
        DELETE
            FROM BEVERAGE
            WHERE bev_code=?
    `
}