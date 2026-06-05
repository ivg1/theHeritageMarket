const { getUsers, getUserById } = require("../db/old db/users/getUsers");
const { createUser } = require("../db/old db/users/createUser");
const { 
    updateUserEmail, 
    updateUserPhone, 
    updateUserUsername 
} = require("../db/old db/users/updateUser");
const { deleteUser } = require("../db/old db/users/deleteUser");

//status 404 = not found
//status 201 = created resource (for post)
//status 200 = ok
//status 400 = bad

//next(err) goes to next error handler

//fixed
//get users
const getNumUsers_get = async (req, res) => {
    try {
        const usersList = await getUsers();
        if (!usersList) return res.status(400).json({ error: "failed getting all users" });
        return res.status(200).json(usersList);
    } catch (err) {
        next(err);
    }
};

//fixed
const getUserById_get = async (req, res) => {
    try {
        const { id } = req.query;
        const user = await getUserById(id); 
        console.log(user);
        if (!user) return res.status(404).json({ message: "user not found" });
        return res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

//fixed
//create user
const createUser_post = async (req, res) => {
    try {
        const { 
            username, 
            email, 
            password_hash, 
            phone 
        } = req.body;

        const user = await createUser(username, email, password_hash, phone);
        
        if (user) {
            return res.status(201).json({ message: "user created" });
        } else {
            return res.status(400).json({ error: "user already exists" });
        }
        //res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

//didnt check
//update user stuff
//todo: fix the userChanges overwritten each time (make it array..?)
const updateUser_post = async (req, res) => {
    try {
        const { id } = req.params;
        const { new_username, new_email, new_phone } = req.body;

        //not critical problem, but fixxx the userChanges getting overwritten and not stacking the changes to then send back
        let userChanges;
        if (username) {
            userChanges = await updateUserUsername(new_username, id);
        }
        if (email) {
            userChanges = await updateUserEmail(new_email, id);
        }
        if (phone) {
            userChanges = await updateUserPhone(new_phone, id);
        } 
        //else {
        //    return res.status(400).json({ message: "no changes given" });
        //}
        
        return res.status(200).json(userChanges);
    } catch (err) {
        next(err);
    }
};

//didnt check
//delete the user
const deleteUser_post = async (req, res) => {
    try {
        const { id } = req.query;
        return res.status(200).json(await deleteUser(id));
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getNumUsers_get,
    getUserById_get,
    createUser_post,
    updateUser_post,
    deleteUser_post
}