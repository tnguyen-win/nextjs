// import Image from 'next/image';
import { cssColorPrimary, cssColorPrimaryInvert, cssBorderDefault, cssGradients, Small, cssBackgroundSecondary, depth_hero_parent, depth_hero_background, depth_hero_pattern, iconSize24, cssColorDefault } from '../globals.jsx';
import { FaCalendarDays, FaPeopleGroup, FaHandshake } from 'react-icons/fa6';
import { PiScrollFill } from 'react-icons/pi';
import { BsGeoAltFill } from 'react-icons/bs';
import { Fragment } from 'react';
import Link, { ButtonLink } from '../components/Links';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs'; ``
import { IoHomeSharp } from 'react-icons/io5';

const ROOT_PATH1 = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? '' : '/nextjs';
const ROOT_PATH2 = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? '/' : '/nextjs';

export default function BackgroundGrid() {
    return <div className='z-10 myGrid absolute w-full h-full object-cover'></div>;
    {/* <div className='z-20 absolute w-full h-full object-cover bg-[radial-gradient(rgba(255,0,0,1),rgba(0,0,255,1))] dark:bg-[radial-gradient(rgba(0,0,0,.5),rgba(0,0,0,1))]'></div>
    <div className='z-20 absolute w-full h-full object-cover'></div> */ }
}

export function Hero1({ title, heading, body, buttons }) {
    return (
        // <main className={`${depth_hero_parent || ''} relative min-h-[calc(50vh-96px)] flex flex-col flex-col-reverse lg:flex-row text-center lg:text-start bg-gradient-to-r from-yellow-400 to-pink-400 dark:from-yellow-500 dark:to-pink-500 ${cssColorPrimaryInvert} pb-10`}>
        //     <div className={`relative ${depth_hero_background || ''} flex basis-full grow items-center justify-end lg:ms-40`}>
        //         <div className='flex flex-col gap-4 lg:gap-6 m-auto mb-10 lg:my-32'>
        //             {title ? (
        //                 <h1 className='font-black text-5xl lg:text-6xl mb-3'>
        //                     {/* <h1 className={`${finger_paint.className || ''} text-5xl lg:text-6xl mb-3`}> */}
        //                     {title}
        //                 </h1>
        //             ) : ''}
        //             {heading ? (
        //                 <h2 className='text-xl lg:text-2xl'>
        //                     {heading}
        //                 </h2>
        //             ) : ''}
        //             {body ? (
        //                 <div className='text-xs lg:text-sm'>
        //                     {body}
        //                 </div>
        //             ) : ''}
        //             {buttons ? (
        //                 <div className='flex flex-col lg:flex-row gap-4 mt-3'>
        //                     {buttons}
        //                 </div>
        //             ) : ''}
        //         </div>
        //         {/* <div className={`${depth_hero_pattern || ''}  absolute w-full h-full object-cover rounded-b-full bg-yellow-600`}>abc</div> */}
        //     </div>
        //     <div className={`${depth_hero_background || ''} flex grow basis-full items-center justify-center lg:me-40`}>
        //         <div className='coin flex items-center justify-center grayscale invert dark:invert-0 brightness-200 mx-auto my-16 lg:m-0'></div>
        //         {/* <img className='animate-coin [transform-style:preserve-3d] w-[192px] h-[192px] lg:w-[256px] lg:h-[256px] dark:invert rounded-full shadow-2xl mx-auto my-16 lg:m-0' src='/logo_waka_daiko.png' alt='Home' /> */}
        //         {/* <img className='w-[192px] h-[192px] lg:w-[256px] lg:h-[256px] grayscale invert dark:invert-0 rounded-full shadow-8xl mx-auto my-16 lg:m-0' src='/favicon.jpg' alt='Home' /> */}
        //     </div>
        //     {/* <div className={`${depth_hero_pattern || ''} absolute w-full h-full object-cover ${cssGradients || ''}`}></div> */}
        //     <div className={`${depth_hero_background || ''} custom-shape-divider-bottom-1704478892`}>
        //         <svg className='block' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
        //             <path className={`shape-fill ${cssColorPrimaryInvert || ''}`} fill='currentColor' d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
        //         </svg>
        //     </div>
        // </main>



        <main className={`z-0 relative flex grow items-center justify-center overflow-hidden text-white`}>
            {/* <div className='z-20 w-full h-full min-h-[calc(100vh-96px)] flex flex-col bg-[linear-gradient(rgba(0,0,0,0.625),rgba(0,0,0,0.625))] dark:bg-[linear-gradient(to_right,black,transparent)]'> */}
            <div className='z-20 w-full h-full min-h-[calc(100vh-96px)] flex flex-col bg-[linear-gradient(to_right,rgba(0,0,0,0.75),transparent)] dark:bg-[linear-gradient(to_right,black,transparent)]'>
                {/* <div className='z-20 w-full h-full min-h-[calc(100vh-96px)] flex flex-col bg-[linear-gradient(to_right,black,transparent)]'> */}
                <div className='flex flex-col gap-4 lg:gap-6 text-center lg:text-start m-auto lg:ms-[12.5vw]'>
                    <h1 className={`font-black text-5xl lg:text-7xl`}>
                        {title}
                    </h1>
                    <h2 className='font-black text-2xl tracking-wider'>
                        {heading}
                    </h2>
                    <p className='lg:w-5/6 font-medium text-xs lg:text-xl'>
                        {body}
                    </p>
                    <div className='flex flex-col lg:flex-row gap-4 mx-auto lg:mx-0'>
                        {buttons}
                    </div>
                </div>
            </div>
            {/* <video className='absolute z-10 w-auto min-w-full min-h-full max-w-none' src='/pexels-cottonbro-5659545 (2160p).mp4' playsInline autoPlay muted loop>
                This browser doesn&apos;t support MP4. Try using a different browser.
            </video> */}
            <video className='absolute z-10 w-auto min-w-full min-h-full max-w-none' src={`${ROOT_PATH1}video (1080p).mp4`} playsInline autoPlay muted loop>
                This browser doesn&apos;t support MP4. Try using a different browser.
            </video>
            {/* <img className='absolute z-10 w-auto min-w-full min-h-full max-w-none saturate-50 contrast-125' src='/scene.jpg' /> */}
            {/* <img className='absolute z-10 w-auto min-w-full min-h-full max-w-none saturate-50 contrast-125' src='/team.jpg' /> */}
            {/* <img className='absolute z-10 w-auto min-w-full min-h-full max-w-none saturate-50 contrast-125' src='/Untitled.jpg' /> */}
        </main >
    );
}

export function Hero2({ title, heading, body, buttons }) {
    return (
        <main className={`${depth_hero_parent || ''} relative min-h-[calc(100vh-96px)] flex text-center ${cssColorPrimary || ''}`}>
            <div className={`${depth_hero_background || ''} m-auto`}>
                <div className='flex flex-col gap-4 lg:gap-6 my-16'>
                    {title ? (
                        <h1 className='font-black text-5xl lg:text-7xl'>
                            {title}
                        </h1>
                    ) : ''}
                    {heading ? (
                        <h2 className='font-black text-2xl tracking-wider'>
                            {heading}
                        </h2>
                    ) : ''}
                    {body ? (
                        <div className={`font-medium text-xs lg:text-xl ${cssColorDefault || ''}`}>
                            {body}
                        </div>
                    ) : ''}
                    {buttons ? (
                        <div className='flex flex-col lg:flex-row gap-4 mx-auto mt-3'>
                            {buttons}
                        </div>
                    ) : ''}
                </div>
            </div>
            <div className={`${depth_hero_pattern || ''} absolute w-full h-full object-cover ${cssGradients || ''}`}></div>
            {/* <div className={`z-20 absolute w-full h-full object-cover ${cssGradients || ''}`}></div> */}
            {/* <video className='absolute w-full h-full object-cover saturate-50' src='/video (1080p).mp4' playsInline autoPlay muted loop>
                        This browser doesn&apos;t support MP4. Try using a different browser.
                    </video> */}
            {/* <img className='absolute w-full h-full object-cover' src='/team.jpg' alt={'Hero background video'} /> */}
        </main>
    );
}

export function Features() {
    const listCards = [
        {
            link: 'about/team',
            icon: <FaPeopleGroup size={iconSize24} />,
            heading: 'WHO WE ARE',
            subheading: 'Ages 8-22',
            body: <Fragment>
                Waka Daiko is a fun, diverse, Taiko drumming group that encourages <Small body='team building' /> and instructor-student <Small body='mentorships' />.
            </Fragment>
        },
        {
            link: 'news/events',
            icon: <FaCalendarDays size={iconSize24} />,
            heading: 'PERFORMANCES', subheading: 'Proudly Performed At:',
            body:
                <Fragment>
                    <div>
                        <ul className='inline-block list-disc list-inside'>
                            <li>
                                Autzen Stadium
                            </li>
                            <li>
                                Hult Center
                            </li>
                            <li>
                                University of Oregon
                            </li>
                            <li>
                                Lane Community College
                            </li>
                            <li>
                                Asian Celebration
                            </li>
                            <li>
                                Obon Festival
                            </li>
                            <li>
                                Salem World Beat
                            </li>
                            <li>
                                Kite Festival
                            </li>
                            <li>
                                And more...
                            </li>
                        </ul>
                    </div>
                </Fragment>
        },
        {
            link: 'about/culture',
            icon: <FaHandshake size={iconSize24} />,
            heading: 'COMMUNITY',
            subheading: 'Giving Back',
            body:
                <Fragment>
                    Waka Daiko enjoys <Small body='contributing back' /> to the local community, whether it&#39;s by <Small body='requested performances' />, or by their <Small body='community booth' /> at the annual Asian Celebration.
                </Fragment>
        },
        {
            link: 'about/community',
            icon: <PiScrollFill size={iconSize24} />,
            heading: 'CULTURE',
            subheading: 'Origin of Taiko',
            body:
                <Fragment>
                    The <Small body='history' /> of Taiko and how its song origins play a key part in making Waka Daiko what it&#39;s to this very day.
                </Fragment>
        }
    ];

    const Card = listCards.map((item, i) =>
        <li key={i}>
            <a className={`lg:w-[384px] h-full flex gap-2 rounded-lg megaHover:bg-[rgb(95%,95%,95%)] dark:megaHover:bg-[rgb(5%,5%,5%)] border-[1px] ${cssBorderDefault || ''} mx-5 lg:m-0 p-5`} href={`${ROOT_PATH1}${item.link}`}>
                <div className={`rounded-full ${cssBackgroundSecondary || ''} border-[1px] ${cssBorderDefault || ''} mb-auto p-4`}>
                    {item.icon}
                </div>
                <div className='w-full flex flex-col gap-2 px-5'>
                    <h1 className={`font-black text-xl lg:text-2xl ${cssColorPrimary || ''}`}>
                        {item.heading}
                    </h1>
                    <h2 className={`text-xs lg:text-base ${cssColorPrimary || ''}`}>
                        {item.subheading}
                    </h2>
                    <div className='text-xs lg:text-base'>
                        {item.body}
                    </div>
                </div>
            </a>
        </li>
    );

    return (
        <section>
            <div className={`${depth_hero_parent || ''} relative min-h-[calc(100vh-96px)] flex items-center justify-center container mx-auto`}>
                <div className={`${depth_hero_background || ''} flex flex-col gap-4 lg:gap-6 my-16`}>
                    <h1 className={`font-black text-center text-5xl lg:text-6xl ${cssColorPrimary || ''} mb-8`}>FEATURES</h1>
                    {/* <h1 className={`${roboto.className || ''} text-center text-5xl lg:text-6xl ${cssColorPrimary || ''} mb-8`}>Who We Are</h1> */}
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full font-medium'>{Card}</ul>
                </div>
                <div className={`${depth_hero_pattern || ''} absolute w-full h-full object-cover ${cssGradients || ''}`}></div>
            </div>
        </section>
    );
}

export function Homepage() {
    return <Hero1 type='hero1' title='WAKA DAIKO' heading='Events, Teamwork, Community, Culture' body={
        // return <Hero1 type='hero1' title='WAKA DAIKO' heading='EVENTS, COMMUNITY, CUMMUNITY, CULTURE' body={
        <Fragment>
            Youth Taiko drumming group based in Eugene, Oregon. All youth ages 8-22 are welcome.
        </Fragment>
    } buttons={
        <Fragment>
            {/* <ButtonLink type='hero1' body='EVENTS' href='/news/events' invert={true} />
            <Link type='hero1' body='TRYOUTS' href='/news/tryouts' invert={true} /> */}
            {/* <ButtonLink type='hero1' body={<Fragment>UPCOMING EVENTS</Fragment>} href='/events' /> */}
            {/* <Link type='hero1' body={<Fragment><span className='me-5'><BsPeopleFill /></span>WORKSHOPS</Fragment>} href='/tryouts' /> */}
            <ButtonLink type='hero1' body={<Fragment><span className='me-5'><FaCalendarAlt /></span>UPCOMING EVENTS</Fragment>} href={`${ROOT_PATH1}news/events`} />
            <Link type='hero1' body={<Fragment>WORKSHOPS</Fragment>} href='/news/tryouts' />
        </Fragment>
    } />;
}

export function WIP() {
    return <Hero2 title='WIP' heading='Under Construction' body='Try coming back later.' buttons={<ButtonLink type='hero2' body='RETURN HOME' href={ROOT_PATH2} />} />;
}

export function Error() {
    return <Hero2 type='hero2' title='404' heading='Page Not Found' body='Whatever you&apos;re looking for doesn&apos;t exist here.' buttons={<ButtonLink type='hero2' body='RETURN HOME' href={ROOT_PATH2} />} />;
}
