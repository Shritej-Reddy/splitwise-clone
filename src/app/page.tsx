import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Splitwise Clone</h1>
      <p className="text-gray-700 mb-8">
        Manage your shared expenses with ease. Start by navigating to Groups or Friends.
      </p>
      <div className="flex gap-4">
        <Link href="/groups" className="px-6 py-3 bg-primary text-white rounded-lg shadow-md">
          Go to Groups
        </Link>
        <Link href="/friends" className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-md">
          Go to Friends
        </Link>
      </div>
    </div>
  );
}