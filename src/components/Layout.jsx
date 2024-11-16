import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Splitwise Clone</h1>
          <nav>
            <Link href="/groups">
              <a className="mx-4 text-gray-600 hover:text-gray-900">Groups</a>
            </Link>
            <Link href="/friends">
              <a className="mx-4 text-gray-600 hover:text-gray-900">Friends</a>
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default Layout;