import asyncHandler from 'express-async-handler';
//@desc Auth user/set token
// routes POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
res.status(200).json({message: "Auth User"});
})

//@desc Register user
// routes POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
res.status(200).json({message: "Register User"});
})

//@desc Logout user
// routes POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
res.status(200).json({message: "Logout User"});
})

//@desc Get user profile
// routes GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
res.status(200).json({message: " Get User Profile"});
})

//@desc Update user profile
// routes PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
res.status(200).json({message: "Update User Profile"});
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}