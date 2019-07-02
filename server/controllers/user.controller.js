const User = require('../models/user');
const userCtrl = {};

userCtrl.getUsers = async ( req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUsers = async (req, res) => {
   const user = new User ({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       address: req.body.address,
       phone: req.body.phone,
       e_mail: req.body.e_mail,
       perfil: req.body.perfil
   });
   await user.save()
   res.json({
       'status': 'User Saved'
   });
};

userCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
    res.json(user);
}
userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        phone: req.body.phone,
        e_mail: req.body.e_mail,
        perfil: req.body.perfil
    };

   await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: 'User Updated'});
};

userCtrl.deleteUser = async (req, res) => {
   await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
}
module.exports = userCtrl;
