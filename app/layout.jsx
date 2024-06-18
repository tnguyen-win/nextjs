import './globals.css';
import { cssBackgroundPrimary, cssColorDefault } from './globals.jsx';
import { GeistSans } from 'geist/font/sans';
import { Providers } from './providers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollSelector } from './components/Selectors';

export const metadata = {
    title: 'Waka Daiko',
    description: 'Youth Taiko drumming group based in Eugene, Oregon. All youth ages 8-22 are welcome.',
    icons: { icon: '/favicon.jpg' }
};

export default function Global({ children }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`antialiased ${cssBackgroundPrimary || ''} ${GeistSans.className || ''} ${cssColorDefault || ''}`}>
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />
                    <ScrollSelector />
                </Providers>
            </body>
        </html >
    );
}
