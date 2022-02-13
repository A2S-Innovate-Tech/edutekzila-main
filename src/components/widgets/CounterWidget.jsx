import './CounterWidget.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function CounterWidget(props) {

  return (
      <div className="Counter-Widget-Container">
        <img src={props.img} alt={props.img} />
        <div className="Label">
            <h3 className = "Margin-B0 Light-Blue">
                <CountUp end={props.count} redraw={true} duration={props.duration}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    
                </CountUp>
                {props.postCount}
            </h3>
            <p className="P2">{props.label}</p>
        </div>
    </div>
  );
}

export default CounterWidget;
