import Navbar from "@/components/Navbar";
import Profile from "@/components/profile/ProfileComponent";

const page = () => {
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      <Profile />
    </main>
  );
};

export default page;
