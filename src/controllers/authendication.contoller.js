const User = require("../models/user.model")
const bcrypt = require("bcrypt");
module.exports = {
    async SingUp(req, res) {
        try {
            const { name, email, password } = req.body

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ msg: "User with same already exists!" })
            }

            const hashedPassword = await bcrypt.hash(password, 8)

            let user = new User({
                email, password: hashedPassword, name
            })
            user = await user.save();
            res.json(user);
        } catch (error) {
            res.status(500).json({ err: error.message })
        }
    }
}