import Image from "next/image";
import Link from "next/link";

interface ISocialMediaProps {
  href: string;
  icon: string;
  name: string;
}

export default function SocialMedia(props: ISocialMediaProps) {
  const ICON_SIZE = 25;

  return (
    <Link target="_blank" href={props.href}>
      <Image
        src={props.icon}
        alt={props.name}
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    </Link>
  );
}
