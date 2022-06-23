const timeAuth=(req,res,next)=>{
    const date1 = new Date();
    const date = date1.getHours();
    const day = date1.getDay()

    //const day = 1;

    if((date<18 && date>9) && (day!=0 && day!=1)){
        next()
    }
    else{
        res.status(400).render('test.ejs');
    }
}

module.exports=timeAuth