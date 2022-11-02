import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Lubię programować Next 13 beta</title>
        <meta name="description" content="NextJS 13 - Lubię programować" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href="/posts">Artykuły</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
