import { prisma } from '../app/prisma.js'

const courseLevels = [
	{
		level_block_id: 1,
		title: 'Как работает мышечная память',
		type: 'lecture',
		order: 1,
	},
	{
		level_block_id: 1,
		title: 'Подготовка рабочего места',
		type: 'lecture',
		order: 2,
	},
	{
		level_block_id: 2,
		title: 'Осанка и высота стула',
		type: 'lecture',
		order: 1,
	},
	{
		level_block_id: 2,
		title: 'Положение запястий и предплечий',
		type: 'lecture',
		order: 2,
	},
	{
		level_block_id: 2,
		title: 'Раскладка клавиатуры',
		type: 'lecture',
		order: 3,
	},
	{
		level_block_id: 3,
		title: 'Е/Ё - указательные',
		type: 'practice',
		order: 1,
	},
	{
		level_block_id: 3,
		title: 'И - средний палец левой руки',
		type: 'practice',
		order: 2,
	},
	{
		level_block_id: 3,
		title: 'у - безымянный правой руки',
		type: 'practice',
		order: 3,
	},
]

async function main() {
	console.log('Начинаем очистку таблицы course_levels')

	await prisma.course_levels.deleteMany()

	console.log('Начинаем заполнение таблицы course_levels...')

	for (const level of courseLevels) {
		await prisma.course_levels.create({
			data: level
		})
	}

	console.log('Заполнение таблицы course_levels завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
