import { prisma } from '../app/prisma.js'

const courseReviewStatuses = [
	{
		course_id: 1,
		status: 'approved'
	},
	{
		course_id: 2,
		status: 'pending'
	},
	{
		course_id: 3,
		status: 'approved'
	},
	{
		course_id: 4,
		status: 'approved'
	},
	{
		course_id: 5,
		status: 'approved'
	},
	{
		course_id: 6,
		status: 'rejected'
	},
	{
		course_id: 7,
		status: 'approved'
	},
	{
		course_id: 8,
		status: 'rejected'
	},
	{
		course_id: 9,
		status: 'approved'
	},
	{
		course_id: 10,
		status: 'approved'
	},
		{
		course_id: 11,
		status: 'approved'
	},
	{
		course_id: 12,
		status: 'approved'
	},
	{
		course_id: 13,
		status: 'approved'
	},
]

async function main() {
	console.log('Начинаем очистку таблицы course_review_queue')

	await prisma.course_review_queue.deleteMany()

	console.log('Начинаем заполнение таблицы course_review_queue...')

	for (const reviewStatus of courseReviewStatuses) {
		await prisma.course_review_queue.create({
			data: reviewStatus
		})
	}

	console.log('Заполнение таблицы ccourse_review_queue завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
