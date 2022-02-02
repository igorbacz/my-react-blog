import Header from "../../components/Header/Header";
import "./home.css";
//import Posts from "../../components/posts/Posts"
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import Posts from "../../components/Posts/Posts";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Header title="Welcome" title2="Nails Fantasy" />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </div>
  );
}
