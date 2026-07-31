import validator from "validator";

const validateSignUpData=(req)=>{
    const {firstName,lastName,emailId,password}=req.body;

    if(!firstName || !lastName){
        throw new Error("Name is not valid");
    }
    else if (!validator.isEmail(emailId)){
        throw new Error("Email is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("please enter Strong password");
    }
}

const validateLogInData=(req)=>{
    const {emailId,password}=req.body;
    if(!emailId || !password){
        throw new Error("Email and Password are required");
    }
    else if(!validator.isEmail(emailId)){
         throw new Error("Email is not valid");
    }
}

export {validateSignUpData,validateLogInData};