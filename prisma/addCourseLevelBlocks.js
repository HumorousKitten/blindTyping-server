import { prisma } from '../app/prisma.js'

// добавить большой заголовок во вторую таблицу (details)

const courseBlocks = [
	{
		course_id: 1,
		title: 'Введение в слепую печать',
		order: 1
	},
	{
		course_id: 1,
		title: 'Правильная посадка и положение рук',
		order: 2
	},
	{
		course_id: 1,
		title: 'Практика печати гласных',
		order: 3
	},
]

async function main() {
	console.log('Начинаем очистку таблицы course_level_blocks')

	await prisma.course_level_blocks.deleteMany()

	console.log('Начинаем заполнение таблицы course_level_blocks...')

	for (const block of courseBlocks) {
		await prisma.course_level_blocks.create({
			data: block
		})
	}

	console.log('Заполнение таблицы course_level_blocks завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
