import { JSONType } from '@aws-sdk/client-s3'
import { prisma } from '../../prisma.js'
import asyncHandler from 'express-async-handler'

//@desc Get course levels
//@route GET /course_levels?course_id
//@access Private

export const getCourseLevels = asyncHandler(async (req, res) => {
	const { course_id } = req.query

	if(course_id === null || course_id === '') {
		res.status(404)
		throw new Error('Курс не существует')	
	}

	const course_levels = await prisma.course_level_blocks.findMany({
		where: {
			course_id: +course_id
		},
		select: {
			courseLevels: {
				where: {
					type: 'practice'
				},

				select: {
					courseSubLevels: true
				}
			}
		}
	}) 

	// console.log(JSON.stringify(course_levels))
	console.log(course_levels)

})
