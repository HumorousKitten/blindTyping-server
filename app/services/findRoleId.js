import asyncHandler from 'express-async-handler'
import {prisma} from '../prisma.js'

export const findRoleId = asyncHandler(async role => {
	if(!role) {
		throw new Error('Role is required')
	}
	
	const role_id = await prisma.roles.findFirst({
		where: {
			role: role
		},
		select: {
			id: true
		}
	})

	return role_id
})
