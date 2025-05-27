import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

// @desc Update user role
// @route POST /users/update-role
// @access Private/Admin


const roles = {
	student: 'student',
	moderator: 'moderator',
	teacher: 'teacher'
}

export const updateUserRole = asyncHandler(async (req, res) => {
	const { name, role } = req.body
	const { admin_name } = req.user
	console.log(admin_name, name)

	if (admin_name === name) {
		res.status(400)
		throw new Error('You cannot change your own role')
	}

	if (!roles[role]) {
		res.status(400)
		throw new Error('Invalid role')
	}

	const user_id = await prisma.users.findFirst({
		where: {
			login: name
		},
		select: {
			id: true
		}
	})

	const role_id = await prisma.roles.findFirst({
		where: {
			role: role
		},
		select: {
			id: true
		}
	})



	const updatedUser = await prisma.user_roles.update({
		where: { user_id: user_id.id },
		data: { role_id: role_id.id }
	})

    res.json(updatedUser)
})
