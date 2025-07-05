import jwt from 'jsonwebtoken';

// Function to generate a JWT token and set it as a cookie
// This function takes a response object and a user ID, generates a token, and sets it
const generateToken = (res, userId) => {
const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'Strict', // Helps prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  });
}

export default generateToken;