import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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

const Profile = () => {
  return (
    <Layout>
      <div className="w-[80%] bg-primary overflow-y-auto flex">Profile</div>
    </Layout>
  );
};

export default Profile;
