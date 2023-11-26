import Image from "next/image";

interface ISkillProps {
  title: string;
  description: string;
  icon: string;
}

export default function Skill(props: ISkillProps) {
  return (
    <div className="flex flex-col items-center bg-gray-700 opacity-90 hover:opacity-100 rounded-lg p-5 m-5">
      <Image
        src={props.icon}
        alt={props.title}
        width={512}
        height={512}
        className="w-32 absolute opacity-10"
      />
      <h3 className="text-xl font-semibold mt-3 text-center">{props.title}</h3>
      <p className="text-sm text-gray-300 text-center mt-2 mb-3">
        {props.description}
      </p>
    </div>
  );
}
