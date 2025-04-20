import { prisma } from '../app/prisma.js'

const roles = [
	{role: 'student'},
	{role: 'teacher'},
	{role: 'admin'},
	{role: 'moderator'},
]

async function main() {
	console.log('Начинаем очистку таблицы roles...')

	// Очищаем таблицу
	await prisma.roles.deleteMany()

	console.log('Начинаем заполнение таблицы roles...')

	for (const role of roles) {
		await prisma.roles.create({
			data: role
		})
	}

	console.log('Заполнение таблицы roles завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
