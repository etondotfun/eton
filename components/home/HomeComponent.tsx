"use client";
import Link from "next/link";
import Sidebar from "../Sidebar";
import AllTokens from "./AllTokens";
import Buys from "./Buys";
import Top3 from "./Top3";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex w-[98%]">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

const HomeComponent = () => {
  return (
    <Layout>
      <div className="flex w-full gap-4">
        <Sidebar />
        <div className="w-[90%] relative overflow-y-auto flex flex-col gap-4 mb-8">
          <Buys />
          <div className="flex justify-end pr-4 relative">
            <Link href="/create-token">
              <button className="bg-textColor px-4 py-2 rounded-2xl text-primary font-bold">
                Create Token
              </button>
            </Link>
          </div>
          <Top3 />
          <div className="bg-textColor h-[20px] rounded-full"></div>
          <AllTokens />
        </div>
      </div>
    </Layout>
  );
};

export default HomeComponent;
