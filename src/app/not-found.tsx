import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-400 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Oops! The page {`you're`} looking for{` doesn't`} exist.
        </p>
        <Link href="/" className="text-lg text-primary">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
