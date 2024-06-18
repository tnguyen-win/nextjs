import Image from 'next/image';
import { cssButtonDefault, cssButtonDefaultInvert, Bold, iconSize20, cssColorPrimary, cssColorPrimaryInvert } from '../globals.jsx';
import { Fragment } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { Fjalla_One } from 'next/font/google';
// import localFont from 'next/font/local';

const ROOT_PATH1 = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? '' : '/';
const ROOT_PATH2 = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? '/' : '/nextjs/';

const fjalla_one = Fjalla_One({ subsets: ['latin'], weight: '400' });
// const manga_temple = localFont({ src: '../../public/mangat.ttf', weight: '400' });

const cssTextInvert = 'text-black dark:text-white';

export function BrandLink({ href, body, extraClasses }) {
    return (
        <a className={`flex items-center gap-2 font-black text-2xl ${extraClasses || ''}`} href={ROOT_PATH2}>
            <div className='grow grayscale invert dark:invert-0 brightness-200'>
                <Image src={`${ROOT_PATH1}favicon.jpg`} alt='Waka Daiko logo' width={40} height={40} />
            </div>
            {/* <div className={`shrink ${manga_temple.className || ''} ${cssTextInvert}`}> */}
            <div className={`shrink ${fjalla_one.className} text-3xl ${cssTextInvert}`}>
                {body}
            </div>
        </a>
    );
}

export function ProfileLink({ href }) {
    return (
        <a className='flex items-center text-lg megaHover:text-black dark:megaHover:text-white p-6 lg:p-3' href={href}>
            <BsPersonCircle size={iconSize20} />
        </a>
    );
}

export default function Link({ type, href, body, invert, extraClasses }) {
    let c;

    const cssHover = 'megaHover:text-black dark:megaHover:text-white';

    switch (type) {
        case 'navbar':
            // c = `text-sm ${cssHover} megaHover:shadow-[inset_0_-2px_0_black] dark:megaHover:shadow-[inset_0_-1px_0_white] p-6 lg:px-4`;
            // c = `text-sm p-6 lg:px-4 ${cssHover}`;
            c = `text-sm p-6 lg:px-4 ${cssHover} megaHover:bg-[rgb(95%,95%,95%)] dark:megaHover:bg-[rgb(5%,5%,5%)]`;
            break;
        case 'hero1':
            c = `justify-center rounded-lg font-black text-white lg:text-lg px-3 py-1.5`;
            break;
        case 'footer':
            c = cssHover;
            break;
        default:
            c = '';
            break;
    }

    return (
        <a className={`group flex items-center ${c || ''} ${extraClasses || ''}`} href={`${ROOT_PATH1}${href}`}>
            {type === 'hero1' ? <Fragment><span className={`flex items-center font-black text-white`}>{body}</span><span className='transition-transform group-hover:translate-x-1 ms-2'>-&gt;</span></Fragment> : body}
        </a>
    );
}

export function ButtonLink({ type, href, body, invert }) {
    let c;

    switch (type) {
        case 'navbar':
            c = 'w-full h-full p-0';
            break;
        case 'hero1':
            c = `rounded-lg bg-white megaHover:bg-[rgb(95%,95%,95%)] text-black border-2 border-white megaHover:border-[rgb(90%,90%,90%)]`;
            break;
        case 'hero2':
            c = `rounded-lg ${invert ? cssButtonDefaultInvert || '' : cssButtonDefault || ''}`;
            break;
        default:
            c = '';
            break;
    }

    return (
        <a className={`flex items-center justify-center font-black lg:text-lg px-4 py-2 ${c || ''}`} href={`${ROOT_PATH1}${href}`}>
            {type === 'navbar' ? <span className={`w-full text-center lg:w-max rounded-lg ${cssButtonDefault} mx-5 lg:m-0 p-2 lg:px-2 lg:py-1`}>{body}</span> : body}
        </a >
    );
}
