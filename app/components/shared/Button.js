export default function Button({ text, action }) {
  return (
    <button className="rounded-full px-4 py-2 font-medium text-white bg-[#B27070] hover:bg-[#B27070]/80 transition-all duration-200">
      {text}
    </button>
  );
}
