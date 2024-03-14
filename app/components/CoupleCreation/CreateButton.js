"use client";

import { PlusIcon } from "@heroicons/react/20/solid";

export default function CreateButton({ userId }) {
  return (
    <button
      className="px-4 py-2 rounded-full bg-[#B27070] hover:bg-[#B27070]/80 transition-all text-white font-medium"
      onClick={() => {
        fetch("/api/couple/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
          }),
        });
      }}
    >
      <div className="flex gap-1 items-center">
        <PlusIcon className="w-5 h-5" />
        Create new
      </div>
    </button>
  );
}
