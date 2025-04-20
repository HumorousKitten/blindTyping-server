import { prisma } from '../app/prisma.js'

const results = [
	{ user_id: 1, level: 1, sublevel: 1, cpm: 50, wpm: 35, accuracy: 91 },
	{ user_id: 1, level: 0, sublevel: 1, cpm: 60, wpm: 10, accuracy: 92 },
	{ user_id: 1, level: 2, sublevel: 1, cpm: 20, wpm: 30, accuracy: 93 },
	{ user_id: 1, level: 2, sublevel: 2, cpm: 10, wpm: 10, accuracy: 94 },
	{ user_id: 1, level: 1, sublevel: 3, cpm: 30, wpm: 55, accuracy: 100 },
	{ user_id: 1, level: 1, sublevel: 2, cpm: 2, wpm: 3, accuracy: 100 },
]

async function main() {
	console.log('Начинаем очистку таблицы results...')

	// Очищаем таблицу
	await prisma.results.deleteMany()

	console.log('Начинаем заполнение таблицы results...')

	for (const result of results) {
		await prisma.results.create({
			data: result
		})
	}

	console.log('Заполнение таблицы results завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
