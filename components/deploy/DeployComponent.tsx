import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex w-[98%]">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

const Deploy = () => {
  return (
    <Layout>
      <div className="flex w-full gap-4">
        <Sidebar />
        <div className="w-[90%] overflow-y-auto">
          <div>Deploy</div>
        </div>
      </div>
    </Layout>
  );
};

export default Deploy;
