import { prisma } from '../prisma.js'
import asyncHandler from 'express-async-handler'

//@desc Get user email 
//@route GET /user/getEmail
//@access Private

export const getUserEmail = asyncHandler(async (req, res) => {
	const { email } = req.user
	console.log(req.user)
	res.json(email)
})


//@desc Get user login 
//@route GET /user/getLogin
//@access Private

export const getUserLogin = asyncHandler(async (req, res) => {
	const { login } = req.user
	
	res.json(login)
})
