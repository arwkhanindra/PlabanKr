import "./styles/App.css";
import NavigationBar from "./components/NavigationBar";
import SideMenu from "./components/SideMenu";
import MainBody from "./components/MainBody";

const App = () => {
  return (
    <div className="app-body">
      <NavigationBar />
      <section className="body">
        <SideMenu />
        <MainBody />
      </section>
    </div>
  );
};

export default App;
