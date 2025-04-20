import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

//@desc private admin role routes
export const isAdmin = asyncHandler(async (req, res, next) => {
	const { id } = req.user

	const user_role = await prisma.user_roles.findFirst({
		where: {
			user_id: id
		},
		select: {
			user: {
				select: {login: true}
			},
			role: {
				select: {role: true}
			}
		}
	})

	const {role} = user_role.role
	const {login} = user_role.user
	
	if(role !== 'admin') {
		res.status(401)
		throw new Error('you are not an admin')
	}

	req.user['admin_name'] = login
	next()
})
