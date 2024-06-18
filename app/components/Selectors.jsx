'use client';
import { cssBackgroundSecondary, cssButtonDefault, cssBorderDefault, iconSize16, iconSize20, depth_navbar_dropdowns, depth_footer_scroll } from '../globals.jsx';
import { FaBars, FaGlobe, FaChevronUp } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaX } from 'react-icons/fa6';
import ReactCountryFlag from 'react-country-flag';
import { useTheme } from 'next-themes';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { HiComputerDesktop } from 'react-icons/hi2';

export default function MobileSelector({ collapse, handleMobile }) {
    return (
        <button className='lg:hidden dark:megaHover:text-white ms-auto p-6' type='button' onClick={handleMobile}>
            {collapse ? <FaBars size={iconSize20} /> : <FaX size={iconSize20} />}
        </button>
    );
}

const cssDropdown = 'dropdown-item w-full font-medium megaHover:text-black dark:megaHover:text-white me-[64px] p-4';

const HtmlDropdown = ({ type, buttons, body }) => {
    let c;

    switch (type) {
        case 'lang':
            c = '';
            break;
        case 'theme':
            c = '';
            break;
        default:
            c = '';
            break;
    }

    return (
        <div className='group relative flex'>
            <button className={`megaHover:text-black dark:megaHover:text-white p-6 lg:p-3 ${c || ''}`} type='button'>
                {buttons}
            </button>
            <ul className={`${depth_navbar_dropdowns || ''} hidden group-focus-within:block lg:group-focus-within:hidden group-hover:block absolute top-full w-max -translate-x-[25%] lg:-translate-x-[37.5%] rounded-b-lg ${cssBackgroundSecondary || ''} border-[1px] ${cssBorderDefault || ''} shadow-lg dark:shadow-none`}>
                {body}
            </ul>
        </div>
    );
};

const resetDropdowns = () => typeof document !== 'undefined' ? document.activeElement.blur() : {};

export function SearchSelector() {
    return (
        <div className='group lg:[&:not(:hover)>*:last-child]:hidden relative flex'>
            <button className='flex items-center megaHover:text-black dark:megaHover:text-white p-6 lg:p-3' type='button'>
                <FaMagnifyingGlass size={iconSize16} />
            </button>
            <ul className={`${depth_navbar_dropdowns || ''} hidden group-focus-within:flex absolute top-full start-[-100%] lg:start-[-325%] top-full shadow-lg dark:shadow-none`}>
                <li>
                    <div className={`w-full h-full flex items-center ${cssBackgroundSecondary || ''} border-[1px] ${cssBorderDefault || ''} px-4 py-3`}>
                        <FaMagnifyingGlass size={iconSize16} />
                    </div>
                </li>
                <li>
                    <input className={`${cssBackgroundSecondary || ''} border-y-[1px] ${cssBorderDefault || ''} p-3`} placeholder='Search...' />
                </li>
                <li>
                    <button className={`w-full h-full ${cssBackgroundSecondary || ''} megaHover:text-black dark:megaHover:text-white border-[1px] ${cssBorderDefault || ''} px-4 py-3`} type='button' onClick={resetDropdowns}>
                        <FaX size={iconSize16} />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export function LanguageSelector() {
    const cssLanguages = 'flex items-center gap-4';

    const listLanguages = [
        { lang: 'en', body: <span className={cssLanguages}><ReactCountryFlag countryCode='US' svg />English</span> },
        { lang: 'ja', body: <span className={cssLanguages}><ReactCountryFlag countryCode='JP' svg />Japanese</span> },
        { lang: 'vi', body: <span className={cssLanguages}><ReactCountryFlag countryCode='VN' svg />Vietnamese</span> },
        { lang: 'zh', body: <span className={cssLanguages}><ReactCountryFlag countryCode='CN' svg />Chinese</span> },
        { lang: 'ko', body: <span className={cssLanguages}><ReactCountryFlag countryCode='KR' svg />Korean</span> }
    ];

    // eslint-disable-next-line
    const handleLanguage = e => typeof document !== 'undefined' ? (document.documentElement.lang = e.currentTarget.getAttribute('language'), console.log(document.documentElement.lang), resetDropdowns()) : {};

    // eslint-disable-next-line
    return <HtmlDropdown type='lang' buttons={<FaGlobe size={iconSize20} />} body={listLanguages.map((l, i) => <li key={i}><button className={cssDropdown} language={l.lang} onClick={handleLanguage}>{l.body}</button></li>)} />;
}

export function ThemeSelector() {
    const cssThemes = 'flex items-center gap-4';

    const listThemes = [
        { theme: 'light', body: <span className={cssThemes}><BsSunFill />Light</span> },
        { theme: 'dark', body: <span className={cssThemes}><BsMoonStarsFill />Dark</span> },
        { theme: 'system', body: <span className={cssThemes}><HiComputerDesktop />System</span> }
    ];

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleTheme = e => (setTheme(e.currentTarget.getAttribute('theme')), resetDropdowns());

    useEffect(() => {
        setMounted(true);
    }, []);

    // eslint-disable-next-line
    return <HtmlDropdown type='theme' buttons={mounted ? theme === 'light' ? <BsSunFill size={iconSize20} /> : theme === 'dark' ? <BsMoonStarsFill size={iconSize20} /> : theme === 'system' ? <HiComputerDesktop size={iconSize20} /> : '' : <HiComputerDesktop size={iconSize20} />} body={listThemes.map((l, i) => <li key={i}><button className={cssDropdown} theme={l.theme} onClick={handleTheme}>{l.body}</button></li>)} />;
}

export function ScrollSelector() {
    const [screenMoved, setScreenMoved] = useState(false);

    const checkScreenPosition = () => typeof document !== 'undefined' ? document.body.scrollTop > 250 || document.documentElement.scrollTop > 250 ? setScreenMoved(true) : setScreenMoved(false) : '';
    const handleScroll = () => typeof document !== 'undefined' ? (document.body.scroll({ top: 0, left: 0, behavior: 'smooth' }), document.documentElement.scroll({ top: 0, left: 0, behavior: 'smooth' })) : {};

    useEffect(() => {
        checkScreenPosition();

        typeof window !== 'undefined' ? (window.addEventListener('scroll', checkScreenPosition), window.addEventListener('touchmove', checkScreenPosition)) : {};
    }, []);

    return (
        <button className={`${screenMoved ? '' : 'hidden'} ${depth_footer_scroll || ''} fixed right-0 bottom-0 rounded-full ${cssButtonDefault || ''} m-[2vw] p-3`} type='button' onClick={handleScroll}>
            <FaChevronUp size={iconSize16} />
        </button>
    );
}
