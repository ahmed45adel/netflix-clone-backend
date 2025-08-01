import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" });

	res.cookie("jwt-netflix", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in MS
		httpOnly: true, 
		sameSite: "none", 
		secure: process.env.NODE_ENV === "production",
		secure: true,
	});

	return token;
};
