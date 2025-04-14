import { prisma } from '../app/prisma.js'

const levels = [
	{
		level: 0,
		sublevel: 1,
		str: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet felis a eros imperdiet, nec ornare nibh euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur elementum odio at ligula vehicula, vel sagittis metus vestibulum.'
	},
	{ level: 1, sublevel: 1, str: 'fff jjj uuu jjj fff uuu fff jjj uuu' },
	{
		level: 1,
		sublevel: 2,
		str: 'uj uf fu uj uj uj fu uj fu uf ju uf uj ju ju uf uf fu uf uj uj ju uj'
	},
	{
		level: 1,
		sublevel: 3,
		str: 'juju uj fjuju fuf jujuf jufuf fu jujuf fuf ju fjuf ufuj fufuj ufu ufu fujuf uf fuju uf fuju fujuf jufu fju jufu fuju'
	},

	{
		level: 2,
		sublevel: 1,
		str: 'ddd eee kkk iii ddd kkk iii eee kkk iii dod iii eee kkk eee dod iii kkk eee'
	},
	{
		level: 2,
		sublevel: 2,
		str: 'dik ik di ek kik id kid ke ed dek kee ed ek ek eke ke kek did ek ded ked did kek ed kek'
	},
	{
		level: 2,
		sublevel: 3,
		str: 'dujeek duke keekie juke juke defi fukie fude duke juke juke jude jude defi kudue ideu fude fuji kufi kufi feud duke fude jude keekie'
	},

	{ level: 3, sublevel: 1, str: 'sss www lll ooo sss www ooo lll www sss' },
	{
		level: 3,
		sublevel: 2,
		str: 'sos wo lo ols lo wow wol olo wos os ols wow ows os ols wo olo lol ols lol ols wol wow os low'
	},
	{
		level: 3,
		sublevel: 3,
		str: 'juked joked fjeld slojd kulfi jowl fuji jowed jouk joe kewl fujis kifs folks folks joe jowl joule woful jolie jolie juke folks flew kefs'
	},

	{
		level: 4,
		sublevel: 1,
		str: 'ggg ttt hhh yyy ggg yyy hhh ttt yyy ggg ttt hhh yyy ttt yyy ggg hhh'
	},
	{
		level: 4,
		sublevel: 2,
		str: 'It try vat hy tyev hy yt tyt hyt ynh ty yht yt yth yth yth yn'
	},
	{
		level: 4,
		sublevel: 3,
		str: 'kith jogs sukh hoki skeg jolt heft jhil whey hoks just josh kilt hike whey heft gulf jilt ugly gowk juts heft kyte heft eggy'
	},

	{ level: 5, sublevel: 1, str: 'aaa ggg ppp aaa pop aaa ppp aaa' },
	{
		level: 5,
		sublevel: 2,
		str: 'pa gap ga gaga paq agaq agap gaga pap paq agaq pa agaq app apa pap papa gapa agap ap aq appa apa gaga gapp'
	},
	{
		level: 5,
		sublevel: 3,
		str: 'pudge quips getup quake fakey squad aquae paged pepos gawky payed gawky quips spike equip spake gawky pogey aquae pupa quake quake gopak pokes gopak'
	},

	{ level: 6, sublevel: 1, str: 'rrr bbb nnn bbb nnn rrr nnn bbb rer nnn' },
	{
		level: 6,
		sublevel: 2,
		str: 'ur un un ry urb nun br bub nub bur by un rub rub bun urn ry ry ru bur by run ur ru nun'
	},
	{
		level: 6,
		sublevel: 3,
		str: 'graph brawn broke dhikr brawn band pronk poker brank borek boked pronk bank pronk bank kebar bandh dhikr piker whang twonk graph brank brank baker'
	},

	{ level: 7, sublevel: 1, str: 'wwv mmm ccc mmm vw mmm vvv ccc mmm cc vvv' },
	{
		level: 7,
		sublevel: 2,
		str: 'yc muf mu my uv ym muf yc yc mu muf vu my mu vy uc mu muf uv my cy'
	},
	{
		level: 7,
		sublevel: 3,
		str: 'vice immy pavid cocks camp cocks cocks moved skive comp gack cumec coky cumec duck cocks kempt dicky kempt dump gamp gucks gymp cumec kemps'
	},

	{
		level: 8,
		sublevel: 1,
		str: 'xxx zzz zzz xxx xxxz zzzx xxxz zzzx xxxz zzzx'
	},
	{
		level: 8,
		sublevel: 2,
		str: 'xe xe xo ze ez xe zo xo iz oz ez iz ze xo xe oz zo ze zo xe iz ez ex iz ze'
	},
	{
		level: 8,
		sublevel: 3,
		str: 'axon zinc zing bize zinc zona razz buzz zine czar oxen putz oxer roux next zing czar zinc eaux oxen exit raze razz nixe tizz'
	}
]

async function main() {
	console.log('Начинаем очистку таблицы levels...')

	// Очищаем таблицу
	await prisma.levels.deleteMany()

	console.log('Начинаем заполнение таблицы levels...')

	for (const level of levels) {
		await prisma.levels.create({
			data: level
		})
	}

	console.log('Заполнение таблицы levels завершено!')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
