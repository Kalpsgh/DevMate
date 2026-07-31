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


const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "photoUrl",
    "gender",
    "age",
    "about",
    "skills",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  if (!isEditAllowed) {
    throw new Error("Invalid Edit Request");
  }
};

export {validateSignUpData,validateLogInData,validateEditProfileData};