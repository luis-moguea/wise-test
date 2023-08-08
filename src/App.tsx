import Sidebar from "./components/views/Sidebar";
import NavBar from "./components/views/NavBar";
import "./styles/main.css";
import MoreActions from "./components/views/MoreActions";
import InputComp from "./components/views/InputComp";
import ContentFlagsBoxes from "./components/views/ContentFlagsBoxes";

const App = () => {
  return (
    <>
      <div className="app__main" style={{ display: "flex" }}>
        <div className="main__sidebar">
          <Sidebar />
        </div>
        <div className="app">
          <NavBar />
          <div className="main__content__flags">
            <ContentFlagsBoxes />
          </div>
          <InputComp />
          <div className="main__content__actions">
            <MoreActions />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
