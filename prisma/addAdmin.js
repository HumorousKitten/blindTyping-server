import { prisma } from '../app/prisma.js'
import { hash } from 'argon2'

async function main() {

	console.log('Начинаем регистрацию админа')

	const user = await prisma.users.findFirst({
		where: {login: 'humorousKitten[admin]'}
	})

	if(user){
		throw new error('User already exists')
	}

	const admin = await prisma.users.create({
		data: {
			login: 'humorousKitten[admin]',
			email: 'humorousKitten[admin]@gmail.com',
			password: await hash('552478hyper')
		}
	})

	const role = await prisma.roles.findFirst({
		where: {role: 'admin'},
		select: {
			id: true
		}
	})

	if(!role.id) {
		throw new error('the role is missing')
	}

	await prisma.user_roles.create({
		data: {
			user_id: admin.id,
			role_id: role.id
		}
	})

	console.log('Регистрация админа завершена')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
