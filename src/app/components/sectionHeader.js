export default function sectionHeader({ name }) {
  return (
    <>
      <hr className="border-gray-700 "></hr>
      <div className="text-4xl m-5 rounded-xl w-fit p-2 font-1boldonse">
        {name}
      </div>
    </>
  );
}
