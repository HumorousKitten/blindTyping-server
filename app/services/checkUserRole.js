import asyncHandler from 'express-async-handler'
import {prisma} from '../prisma.js'

export const checkUserRole = asyncHandler(async id => {
	if(!id) {
		throw new Error('Id undefined')
	}
	
	const user_role = await prisma.user_roles.findFirst({
		where: {
			user_id: id
		},
		select: {
			role: {
				select: {role: true}
			}
		}
	})

	return {user_role: user_role.role.role}
})
