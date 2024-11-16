export const metadata = {
  title: 'Splitwise Clone',
  description: 'Manage shared expenses seamlessly.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}