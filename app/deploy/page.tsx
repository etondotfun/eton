import React from "react";
import Deploy from "@/components/deploy/DeployComponent";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      <Deploy />
    </main>
  );
};

export default page;
