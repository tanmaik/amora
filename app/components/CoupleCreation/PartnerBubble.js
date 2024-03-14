import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PartnerBubble({ user, partner }) {
  return (
    <div className={`${partner ? `` : "animate-bounce"}`}>
      <div className="flex -space-x-2 justify-center">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user?.image} alt={user?.name} />
          <AvatarFallback>{user?.name[0]}</AvatarFallback>
        </Avatar>
        <Avatar className="h-20 w-20 ring-2 ring-[#83BB9A]">
          <AvatarImage src={partner?.image} alt={partner?.name} />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
      </div>
      <h2 className="mt-4 text-xl text-[#6a977d] font-semibold">
        {user.name.split(" ")[0]} +{" "}
        {partner?.name ? partner.name.split(" ")[0] : "Partner"}
      </h2>
    </div>
  );
}
