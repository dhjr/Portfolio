export default function Popup({ message }) {
  return (
    <div className="absolute bottom-2 right-2 border-2">
      <p className="">{message}</p>
    </div>
  );
}
