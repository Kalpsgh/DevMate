import {validateEditProfileData} from "../utils/validation.js"

export const getProfile = async (req, res) => {
    try {
        const user = req.user;

        res.status(200).json(user);

    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const editProfile=async(req,res)=>{

    try {
    validateEditProfileData(req);

    const loggedInUser = req.user;
    console.log(loggedInUser)

    Object.keys(req.body).forEach((key) => {
        loggedInUser[key] = req.body[key];
    });

    console.log(loggedInUser)

    await loggedInUser.save();

    res.send("Profile Updated Successfully");

} catch (err) {
    res.status(500).send(err.message);
}
}