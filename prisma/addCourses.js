import { prisma } from '../app/prisma.js'
import { generateSlug } from '../app/utils/generateSlug.js'

// добавить большой заголовок во вторую таблицу (details)

const courses = [
	{
		authorId: 1,
		title: 'Базовый курс\nслепой печти: основы и положение рук.',
		shortDesc:
			'Курс предназначен для начинающих и направлен на формирование базовых навыков слепой печати.\n\nУчащиеся познакомятся с\n правильной посадкой, постановкой рук и расположением пальцев\n на клавиатуре.',
		previewImage: 'https://blindtyping.hb.ru-msk.vkcloud-storage.ru/course-images/cat_admin_course.png',
		avgDuration: 1,
		price: 0,
		slug: generateSlug('Базовый курс\nслепой печти: основы и положение рук.', 1),
		favorite: false,
		fromWhom: 'admin'
	},
	{
		authorId: 2,
		title: 'Моторная аsdfsdfдаптация\nи мышечная память',
		shortDesc:
			'Упражнения фокусируются на домашних рядах и постепенной автоматизации движений пальцев.',
		previewImage: '',
		avgDuration: 12,
		price: 0,
		slug: generateSlug('Моторная аsdfsdfдаптация\nи мышечная память', 2),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Ориентаsdfsdfция на клавиатуре',
		shortDesc: 'Включает упражнения на верхний и нижний ряды, а также символы.',
		previewImage: '',
		avgDuration: 22,
		price: 0,
		slug: generateSlug('Ориентаsdfsdfция на клавиатуре', 3),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Высокая тоsdfsdfчность и контроль ошибок',
		shortDesc:
			'Развитие точности ввода, минимизация опечаток и формирование устойчивых сенсомоторных связей.',
		previewImage: '',
		avgDuration: 11,
		price: 200,
		slug: generateSlug('Высокая тоsdfsdfчность и контроль ошибок', 4),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Когнитиsdfsdfвная автоматизация',
		shortDesc:
			'Ускорение печати за счёт снижения когнитивной нагрузки. Ученики переходят от осознанного контроля к интуитивному вводу.',
		previewImage: '',
		avgDuration: 23,
		price: 1199,
		slug: generateSlug('Когнитиsdfsdfвная автоматизация', 5),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Моторная адsdfsdfаптация\nи мышечная память',
		shortDesc:
			'Упражнения фокусируются на домашних рядах и постепенной автоматизации движений пальцев.',
		previewImage: '',
		avgDuration: 12,
		price: 0,
		slug: generateSlug('Моторная адsdfsdfаптация\nи мышечная память', 6),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Ориентацsdfsdfия на клавиатуре',
		shortDesc: 'Включает упражнения на верхний и нижний ряды, а также символы.',
		previewImage: '',
		avgDuration: 22,
		price: 0,
		slug: generateSlug('Ориентацsdfsdfия на клавиатуре', 7),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Высокая тоsdfdsfчность и контроль ошибок',
		shortDesc:
			'Развитие точности ввода, минимизация опечаток и формирование устойчивых сенсомоторных связей.',
		previewImage: '',
		avgDuration: 11,
		price: 200,
		slug: generateSlug('Высокая тоsdfdsfчность и контроль ошибок', 8),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Когнитивнаsdfdsfя автоматизация',
		shortDesc:
			'Ускорение печати за счёт снижения когнитивной нагрузки. Ученики переходят от осознанного контроля к интуитивному вводу.',
		previewImage: '',
		avgDuration: 23,
		price: 1199,
		slug: generateSlug('Когнитивнаsdfdsfя автоматизация', 9),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Моторная адsdfsdfаптация\nи мышечная память',
		shortDesc:
			'Упражнения фокусируются на домашних рядах и постепенной автоматизации движений пальцев.',
		previewImage: '',
		avgDuration: 12,
		price: 0,
		slug: generateSlug('Моторная адsdfsdfаптация\nи мышечная память', 10),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Ориентацияsdfsdf на клавиатуре',
		shortDesc: 'Включает упражнения на верхний и нижний ряды, а также символы.',
		previewImage: '',
		avgDuration: 22,
		price: 0,
		slug: generateSlug('Ориентацияsdfsdf на клавиатуре', 11),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Высокая точнsdfdsfость и контроль ошибок',
		shortDesc:
			'Развитие точности ввода, минимизация опечаток и формирование устойчивых сенсомоторных связей.',
		previewImage: '',
		avgDuration: 11,
		price: 200,
		slug: generateSlug('Высокая точнsdfdsfость и контроль ошибок', 12),
		favorite: false,
		fromWhom: 'user'
	},
	{
		authorId: 2,
		title: 'Когнитивная аsdfsdfвтоматизация',
		shortDesc:
			'Ускорение печати за счёт снижения когнитивной нагрузки. Ученики переходят от осознанного контроля к интуитивному вводу.',
		previewImage: '',
		avgDuration: 23,
		price: 1199,
		slug: generateSlug('Когнитивная аsdfsdfвтоматизация', 13),
		favorite: false,
		fromWhom: 'user'
	}
]

async function main() {
	console.log('Начинаем очистку таблицы courses')

	await prisma.courses.deleteMany()

	console.log('Начинаем заполнение таблицы courses...')

	for (const course of courses) {
		await prisma.courses.create({
			data: course
		})
	}

	console.log('Заполнение таблицы courses завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
