import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-10 py-4 text-white   font-medium items-center">
      <h2 className="hover:text-slate-400 cursor-pointer transition-all">
        Questions
      </h2>
      <Image
        src="./amora.svg"
        width={100}
        height={50}
        alt="Amora logo"
        className="relative bottom-1"
      />
      <h2 className="hover:text-slate-400 cursor-pointer transition-all">
        Pricing
      </h2>
    </nav>
  );
}
