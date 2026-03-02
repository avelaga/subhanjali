import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const avenirRoman = localFont({
  src: '../public/fonts/AvenirLTStd-Roman.otf',
  variable: '--font-avenir-roman',
  display: 'swap',
});

const avenirBook = localFont({
  src: '../public/fonts/AvenirLTStd-Book.otf',
  variable: '--font-avenir-book',
  display: 'swap',
});

const avenirBlack = localFont({
  src: '../public/fonts/AvenirLTStd-Black.otf',
  variable: '--font-avenir-black',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://subhanjali.com'),
  title: 'Subhanjali',
  description: "Subhanjali's Art Portfolio",
  keywords: ['Art', 'Painting', 'Acrylic', 'Oil', 'TX', 'Texas', 'Portrait', 'Landscape', 'Fur Painting', 'Canvas', 'Artist', 'Medium'],
  authors: [{ name: 'Subhanjali Velaga' }],
  openGraph: {
    title: 'Subhanjali',
    siteName: "Subhanjali's Art Portfolio",
    description: "Subhanjali's Art Portfolio",
    url: 'https://subhanjali.com',
    images: [{ url: '/images/doggo.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ alt: "Subhanjali's Art Portfolio", url: '/images/doggo.jpg' }],
  },
  other: {
    'p:domain_verify': '8d43080646686bc9101d58872ec5aef3',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${avenirRoman.variable} ${avenirBook.variable} ${avenirBlack.variable}`}
    >
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-66231921-2"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-66231921-2');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
