import Image from 'next/image';

interface ImageDisplayProps {
  imageName: string;
  alt: string;
  priority?: boolean;
}

export default function ImageDisplay({ imageName, alt, priority = false }: ImageDisplayProps) {
  return (
    <div className="relative w-full aspect-auto my-6">
      <div className="relative w-full bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={`/images/${imageName}.jpg`}
          alt={alt}
          width={800}
          height={600}
          priority={priority}
          className="mx-auto"
          style={{
            maxHeight: '600px',
            width: 'auto',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}
