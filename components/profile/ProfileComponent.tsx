import Sidebar from "@/components/Sidebar";
import CardProfile from "../cards/CardProfile";
import CreateTokenButton from "../CreateTokenButton";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex w-[98%]">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

const Profile = () => {
  return (
    <Layout>
      <div className="flex w-full gap-4">
        <Sidebar />
        <div className="w-[90%] relative flex flex-col items-center gap-6 overflow-y-auto pb-4">
          <CreateTokenButton />
          <CardProfile
            img={"/background2.jpg"}
            user="f2fqu2"
            reflink={"https://vkaevsjmhvjqhkbwdvdkj217tbdw"}
            earned={0}
            withdraw={0}
            referrals={0}
            tokensCreated={0}
            transaction={0}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
