"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
export default function CreateButton({ userId }) {
  const router = useRouter();
  return (
    <button
      className="px-4 py-2 rounded-full bg-[#B27070] hover:bg-[#B27070]/80 transition-all text-white font-medium"
      onClick={async () => {
        await fetch("/api/couple/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
          }),
        });
        router.refresh();
      }}
    >
      <div className="flex gap-1 items-center">
        <PlusIcon className="w-5 h-5" />
        Create new
      </div>
    </button>
  );
}
