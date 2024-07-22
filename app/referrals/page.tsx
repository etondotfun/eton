import Navbar from "@/components/Navbar";
import Referrals from "@/components/referrals/ReferralsComponent";

const page = () => {
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      <Referrals />
    </main>
  );
};

export default page;
