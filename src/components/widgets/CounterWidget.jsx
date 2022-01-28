import './CounterWidget.css';

function CounterWidget(props) {
  return (
    <div className="Counter-Widget-Container">
        <img src={props.img} alt={props.img} />
        <div className="Label">
            <h3 className = "Margin-B0 Light-Blue">{props.count}</h3>
            <p className="P1">{props.label}</p>
        </div>
    </div>
  );
}

export default CounterWidget;
