'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialMediaSharing = ({ productName, productUrl }: { productName: string, productUrl: string }) => {

  // Example URLs for sharing on each platform
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${productUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=Check%20out%20this%20product%20${productName}&url=${productUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=Check%20out%20this%20product%20${productName}%20at%20${productUrl}`;

  return (
    <div className="flex space-x-4 justify-center mt-4">
      {/* Facebook */}
      <Link
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-800 transition"
        aria-label="Share on Facebook"
      >
        <FaFacebook size={30} />
      </Link>

      {/* Twitter */}
      <Link
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-600 transition"
        aria-label="Share on Twitter"
      >
        <FaTwitter size={30} />
      </Link>

      {/* WhatsApp */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-green-700 transition"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </Link>
    </div>
  );
};

export default SocialMediaSharing;
