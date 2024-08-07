import Sidebar from "@/components/Sidebar";
import React from "react";
import CardReferral from "../cards/CardReferral";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex w-[98%]">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

const Referrals = () => {
  return (
    <Layout>
      <div className="flex w-full gap-4">
        <Sidebar />
        <div className="w-full md:w-[90%] relative flex flex-col items-center gap-6 pb-8 overflow-y-auto">
          <CardReferral
            reflink={"https://io.take.referral=?/bbjkhssw-wswq12y"}
            referrals={0}
            commission={0}
            refhits={0}
          />
          <div className="text-4xl abril font-bold text-gray-700">
            Reffered Users
          </div>
          <div className="w-[80%]">
            <div className="text-gray-700 font-semibold text-xl">No Referrals Yet</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Referrals;
