import { prisma } from '../app/prisma.js'

const languages = [
	{
		language: 'russian'		
	},
	{
		language: 'english'		
	},
]


async function main() {
	console.log('Начинаем очистку таблицы languages')

	await prisma.languages.deleteMany()

	console.log('Начинаем заполнение таблицы languages...')

	for (const lang of languages) {
		await prisma.languages.create({
			data: lang
		})
	}

	console.log('Заполнение таблицы languages завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
