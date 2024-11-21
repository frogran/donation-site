import Image from 'next/image';

interface ImageDisplayProps {
  src: string;
  alt: string;
  priority?: boolean;
  height?: string; // e.g., 'h-[400px]' or 'h-[300px]'
}

export default function ImageDisplay({ src, alt, priority = false, height = 'h-[300px]' }: ImageDisplayProps) {
  return (
    <div className={`relative w-full ${height} my-6 rounded-lg overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
