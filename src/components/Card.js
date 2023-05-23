import "../styles/Card.css";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      ></div>
      <div className="card-title"> {data.title} </div>
      <div className="card-info">
        <div>Status: {data.status}</div>
        <div> Episodes: {data.episodes} </div>
        <div>Aired: {data.aired}</div>
        <div>Genre: {data.genre}</div>
      </div>
    </div>
  );
};

export default Card;
