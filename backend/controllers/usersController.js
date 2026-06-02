const { getUsers, getUserById } = require("../db/users/getUsers");
const { createUser } = require("../db/users/createUser");
const { 
    updateUserEmail, 
    updateUserPhone, 
    updateUserUsername 
} = require("../db/users/updateUser");
const { deleteUser } = require("../db/users/deleteUser");

//status 404 = not found
//status 201 = created resource (for post)
//status 200 = ok
//status 400 = bad

//next(err) goes to next error handler

//get users
const getAllUsers_get = async (req, res, next) => {
    try {
        res.status(200).json(await getUsers());
    } catch (err) {
        next(err);
    }
};

const getUserById_get = async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await getUserById(id); 
        console.log(user);
        if (!user) return res.status(404).json({ message: "user not found" });
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

//create user
const createUser_post = async (req, res, next) => {
    try {
        const { username, email, password_hash, phone } = req.body;
        const user = await createUser(username, email, password_hash, phone);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

//update user stuff
//todo: fix the userChanges overwritten each time (make it array..?)
const updateUser_post = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { new_username, new_email, new_phone } = req.body;

        //not critical problem, but fixxx the userChanges getting overwritten and not stacking the changes to then send back
        let userChanges;
        if (username) {
            userChanges = await updateUserUsername(new_email, id);
        }
        if (email) {
            userChanges = await updateUserEmail(new_email, id);
        }
        if (phone) {
            userChanges = await updateUserPhone(new_phone, id);
        } 
        else {
            return res.status(400).json({ message: "no changes given" });
        }
        
        res.status(200).json(userChanges);
    } catch (err) {
        next(err);
    }
};

//delete the user
const deleteUser_post = async (req, res, next) => {
    try {
        const { id } = req.params;
        res.status(200).json(await deleteUser(id));
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllUsers_get,
    getUserById_get,
    createUser_post,
    updateUser_post,
    deleteUser_post
}