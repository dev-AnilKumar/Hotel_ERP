const UserModel = require("../models/UserModel");
const generateToken = require("../utils/Auth");

const registerUser = async (req, res) => {
    const { email } = req.body;
    try {
        const findUser = await UserModel.findOne({ email });
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
        const findUser = await UserModel.findOne({ email });
        if (findUser && await findUser.isPasswordMatch(password)) {
            const refreshToken = generateToken({ id: findUser._id, time: "3d" });
            const updateduser = await UserModel.findByIdAndUpdate(findUser._id, {
                refreshToken,
            }, { new: true }
            );

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: true,
                // signed: true,
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

const handleRefreshToken = async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No refresh Token in cookies")
    const refreshToken = cookie.refreshToken;
    const user = await UserModel.findOne({ refreshToken });
    if (!user) throw new Error("No refreshToken present in DB")
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user._id !== decoded.id) {
            throw new Error("there is Something wrong with refresh token")
        }
        const accessToken = generateToken({ id: user._id, time: "15m" });
        res.json({ accessToken })
    })
}

const getUserProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id).select("-password").select("-refreshToken");
        if (user) {
            res.json({ user, success: true });
        } else {
            throw new Error("User Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const logoutUser = async (req, res) => {
    const cookie = req.cookies;
    try {
        if (!cookie?.refreshToken) throw new Error("No refresh Token in cookies");
        const refreshToken = cookie?.refreshToken;
        const user = await UserModel.findOne({ refreshToken });
        if (!user) {
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: true,
                signed: true,
                maxAge: 0
            })
            res.sendStatus(204);
        };
        await UserModel.findByIdAndUpdate({ _id: user._id }, {
            refreshToken: "",
        });
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
            // signed: true,
            maxAge: 0
        })
        res.json({ success: true });

    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

module.exports = { registerUser, loginUser, logoutUser, getUserProfile, handleRefreshToken }