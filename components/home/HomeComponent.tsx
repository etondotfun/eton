"use client";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

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

const HomeComponent = () => {
  return (
    <Layout>
      <div className="w-[80%] bg-primary overflow-y-auto flex">Home</div>
    </Layout>
  );
};

export default HomeComponent;
