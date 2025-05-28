import localFont from 'next/font/local'

export const fontAwesomeSolid = localFont({
    src: '../../public/assets/fonts/fontawesome/fa-solid-900.svg', // Adjust path
    variable: '--font-fa-solid',
});

export const fontAwesomeRegular = localFont({
    src: '../../public/assets/fonts/fontawesome/fa-regular-400.woff2', // Adjust path
    variable: '--font-fa-regular',
});

export const fontAwesomeBrands = localFont({
    src: '../../public/assets/fonts/fontawesome/fa-brands-400.woff2', // Adjust path
    variable: '--font-fa-brands',
});

export const simpleLineIcons = localFont({
    src: '../../public/assets/fonts/simple-line-icons/Simple-Line-Icons.woff2', // Adjust path
    variable: '--font-simple-line-icons',
});
