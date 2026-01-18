import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo512.png";

export default function Logo() {
  return (
    <Link className="inline-flex mb-2 md:mb-0" href="/" aria-label="Cruip">
      <Image src={LogoImg} height={50} alt="Docs" />
    </Link>
  );
}
