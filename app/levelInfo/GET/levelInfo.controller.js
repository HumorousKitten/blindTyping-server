import {prisma} from '../../prisma.js'
import asyncHandler from 'express-async-handler'


//@desc Get level info
//@route GET /course/level?level_id
//@access Private

export const getLevelInfo = asyncHandler(async (req, res) => {
	const { level_id } = req.query

	if(!level_id) {
		res.status(404)
		throw new Error('не существующий id')
	}

	const levelInfo = await prisma.course_levels.findUnique({
		where: {id: +level_id},
		select: {
			title: true,
			type: true,
			levelInfo: {
				select: {
					description: true,
					video_url: true
				}
			}
		}
	})

	res.json(levelInfo)
})