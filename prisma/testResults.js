import { prisma } from '../app/prisma.js'

const results = [
	{ user_id: 2, level: 1, sublevel: 1, cpm: 100, wpm: 100, accuracy: 91 },
	{ user_id: 2, level: 0, sublevel: 1, cpm: 100, wpm: 100, accuracy: 92 },
	{ user_id: 2, level: 2, sublevel: 1, cpm: 100, wpm: 100, accuracy: 93 },
	{ user_id: 2, level: 2, sublevel: 2, cpm: 100, wpm: 100, accuracy: 94 },
	{ user_id: 2, level: 1, sublevel: 3, cpm: 100, wpm: 100, accuracy: 90 },
	{ user_id: 2, level: 1, sublevel: 2, cpm: 100, wpm: 100, accuracy: 100 },
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
