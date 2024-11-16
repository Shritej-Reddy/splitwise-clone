import './globals.css';

export const metadata = {
  title: 'Splitwise Clone',
  description: 'Manage shared expenses seamlessly.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        {/* Global Layout Wrapper */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Splitwise Clone</h1>
            <nav>
              <a href="/groups" className="mx-4 text-gray-600 hover:text-gray-900">
                Groups
              </a>
              <a href="/friends" className="mx-4 text-gray-600 hover:text-gray-900">
                Friends
              </a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}