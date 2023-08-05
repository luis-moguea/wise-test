import "../../styles/moreActions.css";
import { otherActionsData } from "../../data/otherActionsData";

const MoreActions = () => {
  return (
    <>
      <div className="actions__main">
        <h2 className="actions__main--title">Do more with Wise</h2>
      </div>
      <section className="actions__main__data">
        {otherActionsData.map((el, index) => (
          <div className="actions__main__data__cont" key={index}>
            <p className="actions__main__data__cont--text">{el.title}</p>
            <img
              className="actions__main__data__cont--img"
              src={el.image}
              alt="action-image"
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default MoreActions;
