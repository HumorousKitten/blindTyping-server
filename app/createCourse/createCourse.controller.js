import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

//@desc Create new course
//@route Post /course/newCourse
//@access Private


// генерить slug, в последующих методах
export const createCourse = asyncHandler(async (req, res) => {
	const {id, user_role} = req.user
	const data = req.body
	

	const course = await prisma.courses.create({
		data: {
			authorId: id,
			title: data.title,
			favorite: false,
			fromWhom: user_role === 'admin' ? user_role : 'user',

			reviewStatus: {
				create: {
					status: 'pending'
				}
			}
		}
	})


	res.json({answer: true})
})
