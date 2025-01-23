import Link from 'next/link';

export default function Thanks() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4 md:px-8 lg:px-16 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4">🎉 THANK YOU FOR SHOPPING! 🎉</h1>
      <p className="text-base sm:text-lg text-center mb-6 font-semibold">
        We hope you loved your shopping experience with us. 😊
      </p>
      <p className="text-base sm:text-lg text-center font-semibold mb-8">
        Ready to explore more? Click below to shop again! 🛍️
      </p>
      <Link 
        href="/Product" 
        className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
      >
        🛒 Shop Again
      </Link>
    </div>
  );
}
