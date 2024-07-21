"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalletsProvider from "./Wallets";

const menus = [
  {
    title: "Home",
    // icon: <MdDashboard />,
    href: "/",
  },
  {
    title: "Profile",
    // icon: <RiShoppingCartLine />,
    href: "/profile",
  },
  {
    title: "Referrals",
    // icon: <MdManageAccounts />,
    href: "/referrals",
  },
  {
    title: "Deploy",
    // icon: <GrTransaction />,
    href: "/deploy",
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-[#0e0f16] w-[20%] h-[84vh] p-4 mr-4 sticky rounded-2xl flex flex-col justify-between">
      <ul className="space-y-4 mt-4">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-textColor hover:text-white ${
              pathName === menu.href
                ? "bg-textColor text-white"
                : "bg-primary text-textColor"
            } `}
          >
            {/* <div className="text-[20px]">{menu.icon}</div> */}
            <p>{menu.title}</p>
          </Link>
        ))}
      </ul>

      <div className="h-[2px] bg-white/[0.1] rounded-full"></div>

      <div className="flex flex-col gap-3 mb-4">
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
