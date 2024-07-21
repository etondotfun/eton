import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="flex w-[98%]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

const Deploy = () => {
  return (
    <Layout>
      <div className="w-[80%] bg-primary overflow-y-auto flex">Deploy</div>
    </Layout>
  );
};

export default Deploy;
