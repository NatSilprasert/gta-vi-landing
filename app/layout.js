import "./globals.css";

export const metadata = {
  title: "Grand Theft Auto VI - Rockstar Games",
  description: "Fresh out of prison and ready to change the odds in her favor, Lucia's committed to her plan — no matter what it takes. A life with Jason could be her way out.",
  icons: {
    icon: "/vite.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
