import HomeComponent from "@/components/home/HomeComponent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen">
      <div className="w-full min-h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-25"
          // style={{ backgroundImage: "url('/background.jpg')" }}
          // style={{ backgroundImage: "url('/background1.jpg')" }}
          style={{ backgroundImage: "url('/background2.jpg')" }}
        />
        <div className="relative z-10">
          <Navbar />
          <HomeComponent />
        </div>
      </div>
    </main>
  );
}
