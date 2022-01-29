import './Platform.css';

function Platform({platform}) {
  return (
    <div className="Platform-Card">
        <img src={platform.img} alt={platform.img} />
        <p className="Light-Blue" style={{margin: "auto"}}>{platform.title}</p>
    </div>
  );
}

export default Platform;
