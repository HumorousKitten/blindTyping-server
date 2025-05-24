import { prisma } from '../app/prisma.js'

const courseSubLevels = [
	{
		level_id: 6,
		content: 'Здесь какой-то контент',
		order: 1,
	},
	{
		level_id: 6,
		content: 'Здесь какой-то контент',
		order: 2,
	},
	{
		level_id: 6,
		content: 'Здесь какой-то контент',
		order: 3,
	},
	{
		level_id: 6,
		content: 'Здесь какой-то контент',
		order: 4,
	},
	{
		level_id: 6,
		content: 'Здесь какой-то контент',
		order: 5,
	},
	{
		level_id: 6,
		content: 'Здесь какой-то контент',
		order: 6,
	},

	{
		level_id: 7,
		content: 'Здесь какой-то контент',
		order: 1,
	},

	{
		level_id: 7,
		content: 'Здесь какой-то контент',
		order: 2,
	},

	{
		level_id: 7,
		content: 'Здесь какой-то контент',
		order: 3,
	},

	{
		level_id: 7,
		content: 'Здесь какой-то контент',
		order: 4,
	},

	{
		level_id: 8,
		content: 'Здесь какой-то контент',
		order: 1,
	},
	{
		level_id: 8,
		content: 'Здесь какой-то контент',
		order: 2,
	},
	{
		level_id: 8,
		content: 'Здесь какой-то контент',
		order: 3,
	},
	
]

async function main() {
	console.log('Начинаем очистку таблицы course_sublevels')

	await prisma.course_sublevels.deleteMany()

	console.log('Начинаем заполнение таблицы course_sublevels...')

	for (const subLevel of courseSubLevels) {
		await prisma.course_sublevels.create({
			data: subLevel
		})
	}

	console.log('Заполнение таблицы course_sublevels завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
