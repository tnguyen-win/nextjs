export const cssBackgroundPrimary = 'bg-white dark:bg-black';
export const cssBackgroundPrimaryInvert = 'bg-black dark:bg-white';

export const cssBackgroundSecondary = 'bg-[rgb(95%,95%,95%)] dark:bg-[rgb(5%,5%,5%)]';
export const cssBackgroundSecondaryInvert = 'bg-[rgb(5%,5%,5%)] dark:bg-[rgb(95%,95%,95%)]';

export const cssColorDefault = 'text-[rgb(50%,50%,50%)]';

export const cssColorPrimary = 'text-black dark:text-white';
export const cssColorPrimaryInvert = 'text-white dark:text-black';

export const cssColorSecondary = 'text-[rgb(95%,95%,95%)] dark:text-[rgb(5%,5%,5%)]';

export const cssHoverTextPrimary = 'megaHover:text-black dark:megaHover:text-white';

export const cssHoverTextPrimaryInvert = 'megaHover:text-black dark:megaHover:text-white';

export const cssButtonDefault = 'bg-black megaHover:bg-[rgb(10%,10%,10%)] dark:bg-white dark:megaHover:bg-[rgb(90%,90%,90%)] text-white dark:text-black border-2 border-black dark:border-white megaHover:border-[rgb(10%,10%,10%)] dark:megaHover:border-[rgb(90%,90%,90%)]';
export const cssButtonDefaultInvert = 'bg-white megaHover:bg-[rgb(95%,95%,95%)] dark:bg-black dark:megaHover:bg-[rgb(10%,10%,10%)] text-black dark:text-white border-2 border-white megaHover:border-[rgb(90%,90%,90%)] dark:border-black dark:megaHover:border-[rgb(10%,10%,10%)]';

export const cssButtonRed = 'bg-[rgb(87.5%,0,0)] megaHover:bg-[rgb(75%,0,0)] text-white border-2 border-[rgb(87.5%,0,0)] megaHover:border-[rgb(75%,0,0)]';

export const cssBorderDefault = 'border-[rgb(87.5%,87.5%,87.5%)] dark:border-[rgb(12.5%,12.5%,12.5%)]';

export const cssDividerDefault = 'bg-[rgb(87.5%,87.5%,87.5%)] dark:bg-[rgb(22.5%,22.5%,22.5%)]';

// export const cssGradients = 'bg-[linear-gradient(rgba(0,0,0,0),rgb(255,255,255,0.075),rgba(0,0,0,0))] dark:bg-[linear-gradient(rgba(255,0,0,0),rgb(255,255,255,0.075),rgba(0,0,0,0))]';
// export const cssGradients = 'bg-[radial-gradient(rgba(0,0,0,0)_0%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_100%)]';
export const cssGradients = '';
// export const cssGradients = '';

export const iconSize16 = 16;
export const iconSize20 = 20;
export const iconSize24 = 24;

export const depth_navbar_menu = 'z-40';
export const depth_navbar_overlay = 'z-30';
export const depth_navbar_dropdowns = 'z-40';
export const depth_hero_parent = 'z-20';
export const depth_hero_background = 'z-10';
export const depth_hero_pattern = 'z-0';
export const depth_footer_scroll = 'z-40';

export function Bold({ body, invert }) {
    return <span className={`flex items-center font-black ${invert ? cssColorPrimaryInvert : cssColorPrimary}`}>{body}</span>;
}

export function Small({ body, invert }) {
    return <small className={invert ? cssColorPrimaryInvert : cssColorPrimary}>{body}</small>;
}
