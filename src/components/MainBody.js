import "../styles/MainBody.css";
import animelist from "../test_data/json/animelist.json";
import Card from "./Card";

const MainBody = () => {
  return (
    <div className="main-body">
      {animelist.map((data) => {
        return <Card data={data} key={data.id} />;
      })}
    </div>
  );
};

export default MainBody;
