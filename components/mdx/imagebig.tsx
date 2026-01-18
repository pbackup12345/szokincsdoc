import Image, { StaticImageData } from "next/image";

interface PostImageProps {
  alt: string;
  caption?: string;
  src: StaticImageData;
}

export default function PostImageBig({
  alt,
  caption,
  ...props
}: PostImageProps) {
  return (
    <figure>
      <Image
        className="w-full rounded-sm"
        style={{ textAlign: "center", margin: "0 auto" }}
        {...props}
        alt={alt}
      />
      {caption && (
        <figcaption className="text-sm text-center text-gray-500 mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
