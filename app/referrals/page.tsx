import Navbar from "@/components/Navbar";
import Referrals from "@/components/referrals/ReferralsComponent";

const page = () => {
  return (
    <main className="bg-primary min-h-screen">
      <div
        className="bg-cover bg-center w-full h-full relative"
        // style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          // style={{ backgroundImage: "url('/background.jpg')" }}
          // style={{ backgroundImage: "url('/background1.jpg')" }}
          style={{ backgroundImage: "url('/background2.jpg')" }}
        />
        <div className="relative z-10">
          <Navbar />
          <Referrals />
        </div>
      </div>
    </main>
  );
};

export default page;
