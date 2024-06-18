import { cssBackgroundSecondary, cssBorderDefault, iconSize24 } from '../globals.jsx';
import Link, { BrandLink } from './Links';
import { FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
    const ROOT_PATH1 = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? '' : '/nextjs';
    const ROOT_PATH2 = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? '/' : '/nextjs';
    const cssHeading = 'font-medium text-black dark:text-white';
    const cssRowChild = 'flex gap-4';
    const cssRowParent = `${cssRowChild} flex-col mt-10 lg:m-0`;

    return (
        <footer className={`text-xs border-t-[1px] ${cssBorderDefault}`}>
            <div className='flex flex-col container mx-auto p-5 lg:p-10'>
                <div className='flex flex-col lg:flex-row justify-center lg:gap-16 mb-20'>
                    <div className='flex flex-col gap-4 mt-5 lg:m-0'>
                        <div className='flex flex-col items-center lg:items-start justify-center lg:justify-start'>
                            <BrandLink href={ROOT_PATH2} body='WAKA DAIKO' extraClasses='text-black dark:text-white' />
                        </div>
                        <div className='flex flex-col gap-4 text-center lg:text-start'>
                            <div className='text-[10px]'>&copy; 2003-2024 Waka Daiko&trade;. All rights reserved.</div>
                            <div className='flex justify-center lg:justify-start gap-2'>
                                <Link type='footer' body='Legal' href={`${ROOT_PATH1}disclaimers/legal`} />
                                |
                                <Link type='footer' body='Privacy Policy' href={`${ROOT_PATH1}disclaimers/privacy`} />
                                |
                                <Link type='footer' body='Cookies' href={`${ROOT_PATH1}disclaimers/cookies`} />
                            </div>
                        </div>
                    </div>
                    <div className={cssRowParent}>
                        <div className={cssHeading}>
                            NEWS
                        </div>
                        <div className={`${cssRowChild} flex-col`}>
                            <Link type='footer' href={`${ROOT_PATH1}news/press`} body='Press' />
                            <Link type='footer' href={`${ROOT_PATH1}news/events`} body='Events' />
                            <Link type='footer' href={`${ROOT_PATH1}news/tryouts`} body='Tryouts' />
                            <Link type='footer' href={`${ROOT_PATH1}news/website`} body='Website' />
                        </div>
                    </div>
                    <div className={cssRowParent}>
                        <div className={cssHeading}>
                            LEARNING
                        </div>
                        <div className={`${cssRowChild} flex-col`}>
                            <Link type='footer' href={`${ROOT_PATH1}learning/videos`} body='Videos' />
                            <Link type='footer' href={`${ROOT_PATH1} learning /text`} body='Text' />
                        </div>
                    </div>
                    <div className={`${cssRowParent} mt-10 lg:m-0`}>
                        <div className={cssHeading}>
                            ABOUT
                        </div>
                        <div className={`${cssRowChild} flex-col`}>
                            <Link type='footer' href={`${ROOT_PATH1}about/team`} body='Team' />
                            <Link type='footer' href={`${ROOT_PATH1}about/culture`} body='Culture' />
                            <Link type='footer' href={`${ROOT_PATH1}about/community`} body='Community' />
                        </div>
                    </div>
                    <div className={`${cssRowParent} mt-10 lg:m-0`}>
                        <div className={cssHeading}>
                            CONTACT
                        </div>
                        <div className={`${cssRowChild}`}>
                            <Link type='footer' href='mailto:wakadaiko@gmail.com' body={<MdEmail size={iconSize24} />} />
                            <Link type='footer' href='https://facebook.com/youthtaiko' body={<FaFacebook size={iconSize24} />} />
                            <Link type='footer' href='https://linkedin.com/company/waka-daiko' body={<FaLinkedin size={iconSize24} />} />
                        </div>
                    </div>
                </div>
                {/* <div className='flex gap-4 items-start justify-center'>
                        <Link type='icon' href='https://facebook.com/youthtaiko' body={<Fragment><FaFacebook size={iconSize} /></Fragment>} />
                        <Link type='icon' href='mailto:johnsmith@fakeemail.com' body={<Fragment><AiOutlineMail size={iconSize} /></Fragment>} />
                    </div> */}
                {/* </div> */}
            </div>
        </footer>
    );
}
