"use client";
import { useRouter } from "next/navigation";
export default function DeleteButton({ coupleId, userId }) {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await fetch("/api/couple/delete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            coupleId,
          }),
        });
        router.refresh();
      }}
      className="text-[#B27070] font-medium"
    >
      Made a mistake? Go back
    </button>
  );
}
