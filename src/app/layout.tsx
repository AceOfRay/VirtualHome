import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="./scripts/hierarchy/classes/UserModuleHandler"></script>
        <script src="./scripts/hierarchy/datastructures/tests/ModulesMap"></script>
      </head>
      <body className="layout">
        {children}
      </body>
    </html>
  );
}
