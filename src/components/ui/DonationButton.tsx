export default function DonationButton({
  text,
  url
}: {
  text: string;
  url: string;
}) {
  return (
    <button
      onClick={() => window.open(url, '_blank')}
      className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
    >
      {text}
    </button>
  );
}
