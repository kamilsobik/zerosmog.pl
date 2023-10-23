import Link from "next/link";
import Logos from "../../../public/logo_small.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Interiorystka">
      <Image src={Logos} alt="Logo" width={100} height={100} />
    </Link>
  );
}
