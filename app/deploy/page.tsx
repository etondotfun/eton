import React from "react";
import Deploy from "@/components/deploy/DeployComponent";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <main className="bg-primary min-h-screen">
      <div className="w-full min-h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed  opacity-25"
          // style={{ backgroundImage: "url('/background.jpg')" }}
          // style={{ backgroundImage: "url('/background1.jpg')" }}
          style={{ backgroundImage: "url('/background2.jpg')" }}
        />
        <div className="relative z-10">
          <Navbar />
          <Deploy />
        </div>
      </div>
    </main>
  );
};

export default page;
