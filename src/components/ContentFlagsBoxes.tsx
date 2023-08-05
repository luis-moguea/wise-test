import { flagsData } from "../data/currenciesFlagsData";
import { mediaFlagsData } from "../data/mediaFlagsData";
import "../styles/contentFlags.css";
import "../styles/contentMain.css";
import { useEffect, useState } from "react";

const ContentFlagsBoxes = () => {
  const [data, setData] = useState(flagsData);
  const [funds, setFunds] = useState("31,400.00 USD");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 812) {
        setData(mediaFlagsData);
        setFunds("45,500.00 USD");
      } else if (window.innerWidth >= 813) {
        setData(flagsData);
        setFunds("31,400.00 USD");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="balance">
        <p className="balance__title">Total balance</p>
        <h2 className="balance__amount">{funds}</h2>
      </div>
      <div className="content">
        {data.map((el, index) => (
          <div key={index} className="content__main">
            <img className="content__main--img" src={el.flag} alt="flag-icon" />
            <div className="content__main--balance">
              <h2 className="content__main--balance-text-h2">{el.remaining}</h2>
              <p className="content__main--balance-text">{el.currency}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentFlagsBoxes;
