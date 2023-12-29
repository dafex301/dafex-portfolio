import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};
export default function Page() {
  return (
    <>
      <main className=" text-white text-center xl:mx-64 md:mx-24 mx-5 pb-8">
        <h1 className="md:text-4xl text-3xl font-bold drop-shadow-md text-yellow-500 hover:text-white duration-200 mb-5">
          Blogs
        </h1>
        <p className="animate-pulse hover:animate-spin">ongoing hehe</p>
      </main>
    </>
  );
}
