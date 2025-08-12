import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";


export default function Home() {
  const loggedIn = { firstName: "Le" };
  return (
    <section className="home no-scrollbar">
      <div className="home-content no-scrollbar">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={0}/>
        </header>
      </div>
       <RightSideBar user = {loggedIn} transactions ={[]} banks={[{}, {}]}/>
    </section>
  );
}
