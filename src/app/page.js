import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-3xl flex flex-col items-center justify-center">
        <p className=" text-5xl font-josefin font-light">Hey there, I'm</p>
        <p
          className={`font-rubik font-bold text-6xl bg-linear-to-b text-transparent from-[#00d19d] to-[#005e48] bg-clip-text`}
        >
          Dhananjay
        </p>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Cat.png"
          alt="Grinning Cat"
          width="200"
          height="200"
        />
      </div>
    </>
  );
}
