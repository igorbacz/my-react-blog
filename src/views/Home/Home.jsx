import Header from "../../components/Header/Header";
import "./home.css";
//import Posts from "../../components/posts/Posts"
import SideBar from "../../components/SideBar/SideBar";
import Posts from "../../components/Posts/Posts";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header title="Welcome" title2="Nails Fantasy" />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}
