const express = require('express');
const app = express();
const logger=require('morgan');
const BeverageController=require('./src/controller/beverageController')
app.use(logger('dev'));
app.use(express.json());

const BeverageRouter=require('./src/routes/beverage-route')
// BeverageController.findAllBevarages();
app.use('/beverage',BeverageRouter);
app.listen(8888,()=>{console.log('server start')})