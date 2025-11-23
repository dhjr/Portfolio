import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="p-2 m-2 w-3xl flex flex-row justify-between">
        <div className="flex flex-col ">
          <p className="text-5xl font-josefin ">Hey, I'm</p>
          <p
            className={`font-rubik font-bold text-7xl leading-20 bg-linear-to-b text-transparent from-[#00d19d] to-[#005e48] bg-clip-text`}
          >
            Dhananjay
          </p>
        </div>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Cat.png"
          alt="Grinning Cat"
          className="size-32"
        />
      </div>
    </>
  );
}
