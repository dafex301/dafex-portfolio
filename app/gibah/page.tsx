import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Q & A",
};

export default function Page() {
  return (
    <>
      <main className=" text-white text-center xl:mx-64 md:mx-24 mx-5 pb-8">
        <h1 className="md:text-4xl text-3xl font-bold drop-shadow-md text-yellow-500 hover:text-white duration-200 mb-5">
          Tempat Gibah
        </h1>
      </main>
    </>
  );
}
