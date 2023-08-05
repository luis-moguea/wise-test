import { FormEvent, useEffect, useState } from "react";
import "../../styles/input.css";
import "../../styles/transactions.css";
import arrow from "../../../public/icons/arrow down.svg";
import { transactionsData } from "../../data/transactionData";
import { mediaTransData } from "../../data/mediaTransData";

interface Data {
  company: string;
  date: string;
  amount: string;
}

const InputComp = () => {
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [seeAll, setSeeAll] = useState(false);
  const [data, setData] = useState<Data[]>([]);
  const [tapKey, setTapKey] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 812) {
        setData(mediaTransData);
      } else if (window.innerWidth >= 813) {
        setData(transactionsData);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const preventDefault = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const actualInputValue = (event.target as HTMLInputElement).value;
      setInputValue(actualInputValue);

      const filter = data.filter((el) => {
        return el.company
          .toLowerCase()
          .includes(actualInputValue.toLowerCase());
      });

      if (inputValue.length === 0) {
        setEmpty(true);
        setTapKey(false);

        setTimeout(() => {
          setEmpty(false);
        }, 3000);
      } else if (inputValue.length >= 1 && filteredData.length <= 0) {
        setEmpty(false);
        setTapKey(true);
        setFilteredData(filter);
      } else if (inputValue.length >= 1 && filteredData.length >= 1) {
        setTapKey(true);
        setFilteredData(filter);
      }
    }
  };

  const handleSeeAll = () => {
    setSeeAll(true);
    setFilteredData(data);
    setInputValue("");
  };

  return (
    <>
      <div className="input__main">
        <h2 className="input__title">Transactions</h2>
        <div className="input__components">
          <form onSubmit={preventDefault}>
            <input
              placeholder="Search by name"
              onKeyDown={handleKeyDown}
              className="input__components--input"
              type="text"
            />
            <button
              onClick={() => handleSeeAll()}
              className="input__components--button"
            >
              See all
            </button>
          </form>
        </div>
      </div>
      <section className="transactions">
        {seeAll ? (
          seeAll && filteredData.length === 0 ? (
            <p className="transactions__error">No transaction has been found</p>
          ) : (
            seeAll &&
            filteredData.map((el, index) => (
              <div key={index} className="transactions__flex">
                <div className="transactions__company">
                  <div className="transactions__company__arrow">
                    <img
                      className="transactions__company__arrow--icon"
                      src={arrow}
                      alt="arrow-icon"
                    />
                  </div>
                  <div className="transactions__company__data">
                    <p className="transactions__company__data--name">
                      {el.company}
                    </p>
                    <p className="transactions__company__data--date">
                      {el.date}
                    </p>
                  </div>
                </div>
                <div className="transactions__quantity">
                  <p className="transactions__quantity--amount">{el.amount}</p>
                  <p className="transactions__quantity--currency">
                    To<span> your USD account</span>
                  </p>
                </div>
              </div>
            ))
          )
        ) : tapKey && filteredData.length === 0 ? (
          <p className="transactions__error">No transaction has been found</p>
        ) : empty ? (
          <p className="transactions__error">Please enter a name</p>
        ) : (
          tapKey &&
          filteredData.map((el, index) => (
            <div key={index} className="transactions__flex">
              <div className="transactions__company">
                <div className="transactions__company__arrow">
                  <img
                    className="transactions__company__arrow--icon"
                    src={arrow}
                    alt="arrow-icon"
                  />
                </div>
                <div className="transactions__company__data">
                  <p className="transactions__company__data--name">
                    {el.company}
                  </p>
                  <p className="transactions__company__data--date">{el.date}</p>
                </div>
              </div>
              <div className="transactions__quantity">
                <p className="transactions__quantity--amount">{el.amount}</p>
                <p className="transactions__quantity--currency">
                  To<span> your USD account</span>
                </p>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default InputComp;
