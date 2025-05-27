import {prisma} from '../prisma.js'
import asyncHandler from 'express-async-handler'

//@desc Get user role
//@route GET /me/role
//@access Private

export const getUserRole = asyncHandler(async (req, res) => {
	const {id} = req.user

	const user_role = await prisma.user_roles.findUnique({
		where: {
			user_id: id
		},

		select: {
			role: {
				select: {
					role: true
				}
			}
		}
	})

	res.json({role: user_role.role.role})
})