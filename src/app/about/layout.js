"use client"
import { usePathname } from 'next/navigation';

export default function AboutLayout({ children }) {
    const pathname = usePathname();

  return (
    <html lang="en">
      <body
      >
        <h1>this is about page layout of route :{pathname.slice(1)}</h1> 
        {children}
      </body>
    </html>
  );
}
