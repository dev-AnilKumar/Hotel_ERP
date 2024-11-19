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
                httpOnly: true,
                secure: true,
                signed: true,
                maxAge: 3 * 24 * 60 * 60 * 1000
            })

            res.json({
                user: {
                    name: updateduser?.name,
                    isAdmin: updateduser?.isAdmin,
                    accessToken: generateToken({ id: findUser._id, time: "15m" }),
                },
                success: true
            });
        }
        else {
            throw new Error("Invalid Credentials");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const getUserProfile = async () => {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id).select("-password", "-refreshToken");
        if (user) {
            res.json(user, { success: true });
        } else {
            throw new Error("User Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const logoutUser = async () => {
    const cookie = req.cookie;
    try {
        if (!cookie?.refreshToken) throw new Error("No refresh Token in cookies");
        const refreshToken = cookie?.refreshToken;
        const user = await UserModel.find({ refreshToken });
        if (!user) {
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: true,
                signed: true,
                maxAge: 0
            })
            res.sendStatus(204);
        };
        await UserModel.findByIdAndUpdate({ id: user._id }, {
            refreshToken: "",
        });
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
            signed: true,
            maxAge: 0
        })
        res.json({ success: true });

    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

module.exports = { registerUser, loginUser, logoutUser, getUserProfile }