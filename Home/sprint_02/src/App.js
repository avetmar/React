// import logo from './logo.svg';
import Header from "./header/Header";
import Main from "./main/Main";
import Sidebar from "./main/Sidebar";
import Footer from "./footer/Footer";

const site = {
  site_name: "react test",
  site_title: "my first site with react",
  nav: [
    { link: "nav1", text: "my link" },
    { link: "nav2", text: "my link 2" },
    { link: "nav3", text: "my link 3" },
  ],
};

function App() {
  return (
    <>
      <Header site={site} />
      <Main />
      <Sidebar />
      <Footer site={site} />
    </>
  );
}

export default App;
