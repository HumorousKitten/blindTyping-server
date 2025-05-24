import { prisma } from '../app/prisma.js'

// добавить большой заголовок во вторую таблицу (details)

const courseStats = [
	{
		course_id: 1,
		ratingAvg: 3.2,
		enrollmentsCount: 10000
	},
	{
		course_id: 2,
		ratingAvg: 4.1,
		enrollmentsCount: 10
	},
	{
		course_id: 3,
		ratingAvg: 5,
		enrollmentsCount: 10000
	},
	{
		course_id: 4,
		ratingAvg: 4,
		enrollmentsCount: 3000
	},
	{
		course_id: 5,
		ratingAvg: 3,
		enrollmentsCount: 2500
	},
	{
		course_id: 6,
		ratingAvg: 3.2,
		enrollmentsCount: 10000
	},
	{
		course_id: 7,
		ratingAvg: 4.1,
		enrollmentsCount: 10
	},
	{
		course_id: 8,
		ratingAvg: 5,
		enrollmentsCount: 10000
	},
	{
		course_id: 9,
		ratingAvg: 4,
		enrollmentsCount: 3000
	},
	{
		course_id: 10,
		ratingAvg: 3,
		enrollmentsCount: 2500
	},
	{
		course_id: 11,
		ratingAvg: 5,
		enrollmentsCount: 10000
	},
	{
		course_id: 12,
		ratingAvg: 4,
		enrollmentsCount: 3000
	},
	{
		course_id: 13,
		ratingAvg: 3,
		enrollmentsCount: 2500
	}
]

async function main() {
	console.log('Начинаем очистку таблицы courseStat')

	await prisma.course_stat.deleteMany()

	console.log('Начинаем заполнение таблицы courseStat...')

	for (const stat of courseStats) {
		await prisma.course_stat.create({
			data: stat
		})
	}

	console.log('Заполнение таблицы courseStat завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
