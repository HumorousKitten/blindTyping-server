import { hash, verify } from 'argon2'
import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'
import { findRoleId } from '../services/findRoleId.js'
import { generateToken } from './generate-token.js'

//@desc Auth user
//@route POST /auth/login
//@access Public

export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await prisma.users.findUnique({
		where: { email }
	})

	if(!user){
		throw new Error('Пользователь не был найден')
	}

	const isValidPassword = await verify(user.password, password)

	if (user && isValidPassword) {
		const token = generateToken(user.id)
		res.cookie('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'Strict',
			maxAge: 1000 * 60 * 60
		})

		res.json({ answer: true })
	} else {
		res.status(401)
		throw new Error('Invalid email or password')
	}
})

//@desc Register user
//@route POST /auth/register
//@access Public

export const registerUser = asyncHandler(async (req, res) => {
	const { login, email, password, role } = req.body

	const isHaveUser = await prisma.users.findUnique({
		where: { login, email }
	})

	if (isHaveUser) {
		res.status(409)
		throw new Error('User already exists')
	}

	const user = await prisma.users.create({
		data: { login, email, password: await hash(password) }
	})

	const role_id = await findRoleId(role)

	await prisma.user_roles.create({
		data: { user_id: user.id, role_id: role_id.id }
	})

	const token = generateToken(user.id)

	res.cookie('token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'Strict',
		maxAge: 1000 * 60 * 60
	})

	res.json({ answer: true })
})
