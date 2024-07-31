"use client";
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
        <div className="w-[90%] overflow-y-auto flex flex-col gap-4 mb-8">
          <Buys />
          <Top3 />
          <div className="bg-textColor h-[20px] rounded-full"></div>
          <AllTokens />
        </div>
      </div>
    </Layout>
  );
};

export default HomeComponent;
