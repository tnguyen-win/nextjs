'use client';

import { cssBackgroundPrimary, cssColorPrimary, cssDividerDefault, depth_navbar_menu, depth_navbar_overlay } from '../globals.jsx';
import { useState, useEffect, Fragment } from 'react';
import { cssBorderDefault } from '../globals.jsx';
import Link, { BrandLink, ProfileLink, ButtonLink } from './Links';
import MobileSelector, { SearchSelector, ThemeSelector, LanguageSelector } from './Selectors';

export default function Navbar() {
    const ROOT_PATH = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? '' : '';
    const cssTextInvert = 'text-white dark:text-black';
    // const cssPill = `absolute -top-2 -end-2 w-6 h-6 flex items-center justify-center rounded-lg text-[0.75rem] font-bold text-black dark:text-white`;
    const cssPill = 'invisible lg:visible text-black dark:text-white ms-2';
    const cssBackground = 'bg-[rgb(95%,95%,95%)] dark:bg-[rgb(5%,5%,5%)] lg:bg-inherit lg:dark:bg-inherit';
    const cssBorder = `border-b-[1px] ${cssBorderDefault}`;

    const [collapse, setCollapse] = useState(true);

    useEffect(() => {
        typeof window !== 'undefined' ? window.onresize = () => window.matchMedia('(min-width: 1024px)') ? setCollapse(true) : {} : {};
    }, []);

    return (
        <>
            <header className={`${depth_navbar_menu || ''} sticky top-0 start-0 bg-inherit`}>
                <a className='h-8 flex items-center justify-center bg-blue-400 text-center text-xs' href={`${ROOT_PATH}news/events`}>
                    <span className='rounded font-black bg-blue-300 text-blue-500 px-2 py-[1px]'>
                        NEW
                    </span>
                    <span className={`${cssTextInvert} tracking-widest mx-3`}>
                        Asian Celebration, Summer 2024
                    </span>
                    <div className={`rounded font-black ${cssBackgroundPrimary} ${cssColorPrimary} px-2 py-[1px]`}>
                        LEARN MORE
                    </div>
                </a>
                <nav className={`${collapse ? '' : cssBorder} lg:border-b-[1px] ${cssBorder}`}>
                    <div className='lg:h-16 flex flex-col lg:flex-row lg:container lg:mx-auto'>
                        {/* Navbar - Left */}
                        <div className='flex flex-col lg:flex-row lg:me-auto'>
                            <div className={`h-16 flex items-center ${cssBorder} lg:border-0`}>
                                <BrandLink href={ROOT_PATH} body='WAKA DAIKO' extraClasses='p-6 lg:px-6' />
                                <MobileSelector collapse={collapse} handleMobile={() => setCollapse(!collapse)} />
                            </div>
                            <div className={`${collapse ? 'hidden ' : ''}lg:flex flex-col lg:flex-row ${cssBackground}`}>
                                {/* <Link type='navbar' href='/news' body={<Fragment>News<div className='relative p-3'><div className={cssPill}>20</div></div></Fragment>} /> */}
                                <Link type='navbar' href={`${ROOT_PATH}news`} body={<Fragment>News<sup className={cssPill}>3</sup></Fragment>} />
                                <Link type='navbar' href={`${ROOT_PATH}learning`} body={<Fragment>Learning<sup className={cssPill}>46</sup></Fragment>} />
                                <Link type='navbar' href={`${ROOT_PATH}about`} body='About' />
                                <Link type='navbar' href={`${ROOT_PATH}contact`} body='Contact' />
                                <Link type='navbar' href={`${ROOT_PATH}abc`} body='404' />
                            </div>
                        </div>
                        {/* Navbar - Right */}
                        <div className={`${collapse ? 'hidden ' : ''}flex lg:flex flex-col lg:flex-row flex-col-reverse`}>
                            <div className={`flex justify-center ${cssBackground}`}>
                                <SearchSelector />
                                <ThemeSelector />
                                <div className={`block self-center ${cssDividerDefault} w-[1px] h-1/2 mx-2`}></div>
                                <LanguageSelector />
                                <ProfileLink href='https://sites.google.com/view/wakadaikowebsite/' />
                            </div>
                            <span className={`flex items-center justify-center ${cssBackground}`}><ButtonLink type='navbar' href={`${ROOT_PATH}news/press`} body='PRESS' /></span>
                        </div>
                    </div>
                </nav>
            </header>
            <div className={`${depth_navbar_overlay || ''} ${collapse ? 'hidden' : ''} fixed start-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.75)]`}></div>
        </>
    );
}
