
export const requestController = async(req,res)=>{
    
    const user=req.user;

    res.send(user.firstName+" send the connection request.");
}