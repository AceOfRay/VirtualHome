import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="module" src="./scripts/hierarchy/classes/UserModuleHandler"></script>
      </head>
      <body className="layout">
        {children}
      </body>
    </html>
  );
}
