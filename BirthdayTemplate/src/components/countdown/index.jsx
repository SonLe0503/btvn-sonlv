import image from "../../assets/images/birthday.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Countdown() {
  const { name, day, month } = useParams();
  const [timeLeft, setTimeLeft] = useState({
    days: 263,
    hours: 12,
    minutes: 35,
    seconds: 12,
  });
  const [currentName, setCurrentName] = useState("Deepankar");
  useEffect(() => {
    if (name && day && month) {
      setCurrentName(name);
      const calculateTimeLeft = () => {
        const currentYear = new Date().getFullYear();
        const birthday = new Date(currentYear, month - 1, day);
        const now = new Date();
        if (birthday - now < 0) {
          birthday.setFullYear(currentYear + 1);
        }
        const difference = birthday - now;
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      };
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }else{
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          const totalSeconds =
            prevTime.days * 86400 +
            prevTime.hours * 3600 +
            prevTime.minutes * 60 +
            prevTime.seconds - 1;
  
          if (totalSeconds <= 0) {
            clearInterval(timer);
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
          }
          return {
            days: Math.floor(totalSeconds / 86400),
            hours: Math.floor((totalSeconds % 86400) / 3600),
            minutes: Math.floor((totalSeconds % 3600) / 60),
            seconds: totalSeconds % 60,
          };
        });
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [name, day, month]);
  console.log(timeLeft !== undefined ? timeLeft : "Giá trị không hợp lệ");
  return (
    <>
      <div className="page">
        <div>
          <h1 className="heading">
            Countdown to
            <span className="highlight"> {currentName} </span>
            Birthday
          </h1>
          <div className="countdown-wrapper">
            <div className="countdown-box">
              {timeLeft.days}
              <span className="legend"> Days</span>
            </div>
            <div className="countdown-box">
              {timeLeft.hours}
              <span className="legend">Hours</span>
            </div>
            <div className="countdown-box">
              {timeLeft.minutes}
              <span className="legend">Minutes</span>
            </div>
            <div className="countdown-box">
              {timeLeft.seconds}
              <span className="legend">Seconds</span>
            </div>
          </div>
        </div>
        {day && month ? (
          <div className="birthdate">
            Birth-Date: {day}{" "}
            {new Date(0, month - 1).toLocaleString("en-US", { month: "long" })}{" "}
            {new Date().getFullYear()}
          </div>
        ) : (
          <div className="birthdate">Birth-Date: 14 June 2024</div>
        )}
        <div className="credits">
          <a href="https://github.com/Deep-Codes">
            <img src={image} alt="Github-Logo" className="github-logo"></img>
          </a>
        </div>
        <Link to="/generate">Generate Here</Link>
      </div>
    </>
  );
}
export default Countdown;
