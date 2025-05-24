import { prisma } from '../app/prisma.js'

// добавить большой заголовок во вторую таблицу (details)

const courseDetails = [
	{
		course_id: 1,
		will_learn: '1. быстро печатать,\n2. круто печатать,\n3. Легко печатать,\n4. умно думать,\n',
		about_course: '<picture><img src="https://blindtyping.hb.ru-msk.vkcloud-storage.ru/course-images/base_course_image.png"/></picture><p>Этот курс создан для тех, кто делает первые шаги в освоении слепой печати. Он закладывает прочный фундамент, необходимый для дальнейшего развития навыка быстрой и точной работы с клавиатурой. В рамках курса вы научитесь правильно располагать руки, использовать домашнюю позицию, а также начнёте формировать мышечную память, которая позволит печатать без взгляда на клавиши.\nМы тщательно подбирали упражнения, чтобы обучение было последовательным, понятным и максимально эффективным. Все уроки построены с учётом психофизиологических особенностей восприятия и усвоения моторных навыков.</p><p>тест нового параграфа</p>',
		for_whom: 'Этот курс для каждого, кто захотел научиться печать в слепую!\nС ним сможет справится:\n• Любой 5-классник.\n• Студент 1 курса.\n• Любой взрослый, захотевший узнать что-то новое.',
		preview_image: 'https://blindtyping.hb.ru-msk.vkcloud-storage.ru/course-images/base_preview_image.svg',
	},
]


async function main() {
	console.log('Начинаем очистку таблицы course_detail')

	await prisma.course_detail.deleteMany()

	console.log('Начинаем заполнение таблицы course_detail...')

	for (const detail of courseDetails) {
		await prisma.course_detail.create({
			data: detail
		})
	}

	console.log('Заполнение таблицы course_detail завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
