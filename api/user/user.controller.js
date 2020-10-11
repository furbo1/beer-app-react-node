
var User = require('./user.model');

exports.getUsers = async (req, res) => {
    try{
        let users;
        if(req.query.login) {
            users = await User.find({login: req.query.login});
        }else {
            users = await User.find({});
        }

        if(users) {
            return res.status(202).json(users);
        }else {
            return res.status(400).json({message: 'An error has occured!'});
        }
    }catch (error) {
        return res.status('400').send(error);
    }

};



exports.getUser = async (req, res) => {
    try {
        let user = await User.findById({_id: req.params.id});

        if(user) {
            return res.status(202).json(user);
        }else {
            return res.status(400).json({message:'An error has occured.'});
        }
    } catch (error) {
        return res.status(400).send({message: "User not found."});
    }
};


exports.createUser = async (req, res) => {
    try {
        let user = req.body;

        const newUser = await User.create(user);

        if(newUser) {
            return res.status(201).send({ message: "User created!", data: newUser });
        } else {
            return res.status(400).send({ message: "An error has occured! User not created!" });
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
};