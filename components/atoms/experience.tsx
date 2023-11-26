import Image from "next/image";

interface IExperienceProps {
  company: string;
  position: string;
  logo: string;
}

export default function Experience(props: IExperienceProps) {
  const LOGO_SIZE = 512;

  return (
    <div className="flex items-center gap-2 col-span-4">
      <Image
        src={props.logo}
        alt={props.company}
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        className="rounded-lg w-10 h-10"
      />
      <div className="flex flex-col">
        <h4 className="text-sm">{props.company}</h4>
        <h5 className="text-xs">{props.position}</h5>
      </div>
    </div>
  );
}
