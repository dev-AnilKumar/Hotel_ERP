const UserModel = require("../models/UserModel");
const generateToken = require("../utils/Auth");

const registerUser = async (req, res) => {
    const { email } = req.body;
    try {
        const findUser = await UserModel.find({ email });
        if (findUser) {
            throw new Error("Email already exists");
        }
        const user = await UserModel.create(req.body);
        res.json({ user, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await UserModel.find({ email });
        if (findUser && findUser.isPasswordMatch(password)) {
            const refreshToken = generateToken({ id: findUser._id, time: "3d" });
            const updateduser = await UserModel.findByIdAndUpdate(findUser._id, {
                refreshToken,
            }, { new: true }
            );

            res.cookie("refreshToken", refreshToken, {
                httpsOnly: true,
                secure: true,
                maxAge: 3 * 24 * 60 * 60 * 1000
            })

            res.json({
                user: {
                    name: updateduser?.name,
                    isAdmin: updateduser?.isAdmin,
                    accessToken: generateToken({ id: findUser._id, time: "15m" }),
                }, success: true
            });
        }
        else {
            throw new Error("Invalid Credentials");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}