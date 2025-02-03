import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Image from 'next/image';
import logo from '@/../public/mkfalogo.jpeg';

export const metadata: Metadata = {
  title: '실시간 집회 일정 정보 - MKFA',
  description: '집회 일정',
};

const pretendard = localFont({
  src: '../../public/PretendardVariable.woff2',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <header className="h-10 flex items-center justify-center">
          <Image src={logo} alt="MKFA logo" className="w-20 h-5" />
        </header>
        {children}
      </body>
    </html>
  );
}
