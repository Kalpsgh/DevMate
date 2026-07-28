const adminAuth=(req,res,next)=>{
    console.log("Admin auth is checking....");
    const token="xyz";
    const isAdminAuthorized=token==="xyz";
    if(!isAdminAuthorized){
        return res.status(401).send("Unauthorized request");
    }
    else{
        next();
    }
}

export default adminAuth;