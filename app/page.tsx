import HomeComponent from "@/components/home/HomeComponent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      <HomeComponent />
    </main>
  );
}
