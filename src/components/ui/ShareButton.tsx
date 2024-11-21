'use client';

import { useState } from 'react';

interface ShareData {
  title: string;
  text: string;
  url: string;
}

interface ShareButtonProps {
  text: string;
  shareData: ShareData;
}

export default function ShareButton({ text, shareData }: ShareButtonProps) {
  const [showOptions, setShowOptions] = useState(false);

  const shareToWhatsApp = () => {
    const text = `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`, '_blank', 'noopener,noreferrer');
  };

  const shareToTwitter = () => {
    const text = `${shareData.title}\n${shareData.url}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`, '_blank', 'noopener,noreferrer');
  };

  const shareToEmail = () => {
    const subject = encodeURIComponent(shareData.title);
    const body = encodeURIComponent(`${shareData.text}\n\n${shareData.url}`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`
      );
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="border border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
      >
        {text}
      </button>

      {/* Share options dropdown */}
      {showOptions && (
        <div className="absolute mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-xl border z-10">
          <button
            onClick={shareToWhatsApp}
            className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
          >
            Share on WhatsApp
          </button>
          <button
            onClick={shareToFacebook}
            className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
          >
            Share on Facebook
          </button>
          <button
            onClick={shareToTwitter}
            className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
          >
            Share on Twitter
          </button>
          <button
            onClick={shareToLinkedIn}
            className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
          >
            Share on LinkedIn
          </button>
          <button
            onClick={shareToEmail}
            className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
          >
            Share via Email
          </button>
          <button
            onClick={copyToClipboard}
            className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
          >
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
}
