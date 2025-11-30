export default function sectionHeader({ name }) {
  return (
    <>
      <hr></hr>
      <div className="text-4xl m-5 rounded-xl w-fit p-2 font-trunculenta neon-blue decoration- decoration-2  neon-blue-flicker">
        {name}
      </div>
    </>
  );
}
