var express = require('express');
var router = express.Router();
var Category = require('../models/dataSchema');


router.post('/create',(req,res,next)=>{
    var newCategory = new Category({
        Categoryid: req.body.Categoryid,
        Categoryname: req.body.Categoryname,
        Categorydescription: req.body.Categorydescription,
        
    });
    newCategory.save((err,category)=>{
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:category});
    })
    // res.status(200).json({msg:'Post request is running'});
});
router.get('/read',(req,res,next)=>{
    Category.find({},(err,categories)=>{
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:categories});
    });
    // res.status(200).json({msg:'get request is running'});
});
router.put('/update',(req,res,next)=>{
    Category.findById(req.body._id,(err,category)=>{
        if(err)
        res.status(500).json({errmsg:err});
        category.Categoryid=req.body.Categoryid;
        category.Categoryname=req.body.Categoryname;
        category.Categorydescription=req.body.Categorydescription;
     
        category.save((err,category)=>{
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:category});
        })
    })
    // res.status(200).json({msg:'put request is running'});
});
router.delete('/delete/:id',(req,res,next)=>{
    Category.findByIdAndRemove({_id:req.params.id},(err,category)=>{
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:category});
    });
    // res.status(200).json({msg:'delete request is running'});
});
module.exports=router;