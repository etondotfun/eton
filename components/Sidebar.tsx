"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalletsProvider from "./Wallets";
import { TbHomeFilled } from "react-icons/tb";
import { GiRamProfile } from "react-icons/gi";
import { SiMoneygram } from "react-icons/si";
import { PiUploadFill } from "react-icons/pi";

const menus = [
  {
    title: "Home",
    icon: <TbHomeFilled />,
    href: "/",
  },
  {
    title: "Profile",
    icon: <GiRamProfile />,
    href: "/profile",
  },
  {
    title: "Referrals",
    icon: <SiMoneygram />,
    href: "/referrals",
  },
  {
    title: "Deploy",
    icon: <PiUploadFill />,
    href: "/deploy",
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-[#333333] w-[10%] h-[77vh] overflow-y-auto py-4 px-2 sticky top-[8.5rem] rounded-2xl hidden md:flex flex-col justify-between">
      <ul className="space-y-3">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex items-center justify-center py-3 px-4 rounded-2xl cursor-pointer hover:bg-primary hover:text-black ${
              pathName === menu.href
                ? "bg-primary text-black"
                : "bg-black/[0.3] text-primary"
            } `}
          >
            <div className="text-[44px]">{menu.icon}</div>
          </Link>
        ))}
      </ul>

      <div className="h-[2px] bg-white/[0.3] rounded-full"></div>

      <div className="flex flex-col gap-3">
        <div className="text-center text-white">icon1</div>

        <div className="text-center text-white">icon2</div>

        <div className="">
          <WalletsProvider />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
