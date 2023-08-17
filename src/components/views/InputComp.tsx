import React, { FormEvent, useEffect, useState } from "react";
import "../../styles/input.css";
import "../../styles/transactions.css";
import arrow from "../../../public/icons/arrow down.svg";
import { transactionsData } from "../../data/transactionData";

interface Data {
  company: string;
  date: string;
  amount: string;
}

const InputComp = () => {
  const [data, setData] = useState<Data[]>([]);
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  const [queryName, setQueryName] = useState<string>("");

  /**
   * Loads the data
   */
  useEffect(() => {
    setData(transactionsData);
  }, []);

  /**
   * Filters and renders the data
   */
  useEffect(() => {
    // Deep clone
    let arr = data.map((x) => ({ ...x }));

    // Filters by name
    if (queryName) {
      arr = arr.filter((item) =>
        item.company.toLowerCase().includes(queryName.toLowerCase())
      );
    }

    setFilteredData(arr);
  }, [data, queryName]);

  const preventDefault = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleSeeAll = () => {
    setQueryName("");
  };

  const onQueryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryName(e.target.value.trim());
  };

  return (
    <>
      <div className="input__main">
        <h2 className="input__title">Transactions</h2>
        <div className="input__components">
          <form onSubmit={preventDefault}>
            <input
              placeholder="Search by name"
              value={queryName}
              onChange={onQueryNameChange}
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
      {
        <section className="transactions">
          {!filteredData.length && (
            <p>
              No transaction found with company's name
              <span className="transactions__input__value"> "{queryName}"</span>
            </p>
          )}
          {filteredData.map((el, index) => (
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
          ))}
        </section>
      }
    </>
  );
};

export default InputComp;
