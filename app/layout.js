import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: '--font-josefin',
});

export const metadata = {
  title: "Evoked",
  description: "Generated by Evoked",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
