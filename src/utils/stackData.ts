import imgHTML from '../public/static/img/stack/html.svg'
import imgCSS from '../public/static/img/stack/css.svg'
import imgJS from '../public/static/img/stack/js.svg'
import imgNode from '../public/static/img/stack/node.svg'
import imgStyled from '../public/static/img/stack/styled.svg'
import imgReact from '../public/static/img/stack/react.svg'
import { FaAngular } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { SiArduino, TbBrandKotlin, SiNestjs, SiPostgresql, SiNextdotjs } from 'react-icons/all'

export const stackData = [
	{
		title: 'HTML',
		img: imgHTML,
	},
	{
		title: 'CSS',
		img: imgCSS,
	},
	{
		title: 'JS',
		img: imgJS,
	},
	{
		title: 'Node JS',
		img: imgNode,
	},
	{
		title: 'Styled Components',
		img: imgStyled,
	},
	{
		title: 'React',
		img: imgReact,
	},
	{ title: 'Angular', img: FaAngular },
	{ title: 'TypeScript', img: SiTypescript },
	{ title: 'Next.js', img: SiNextdotjs },
	{ title: 'Kotlin', img: TbBrandKotlin },
	{ title: 'Arduino', img: SiArduino },
	{ title: 'NestJS', img: SiNestjs },
	{ title: 'PostgreSQL', img: SiPostgresql },
]
