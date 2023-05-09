import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import { Items } from "../../frontendData/frontendData";

function Filters() {
  const [count, setCount] = useState<number>(0);
  // const [filter, setFilter] = useState<string>(active[`${count}`]);

  return (
    <div className="filters">
      <AiOutlineLeft
        size={26}
        className="filters__icon"
        onClick={() => {
          setCount((prevValue) => (prevValue > 0 ? prevValue - 1 : 6));
        }}
      />
      <div className="filters__list">
        {Items.map((item, index) => (
          <p
            key={index}
            className={index === count ? "filters__active" : " "}
            onClick={() => {
              setCount(index);
            }}
          >
            {item.name}
          </p>
        ))}
      </div>
      <AiOutlineRight
        size={26}
        className="filters__icon"
        onClick={() => {
          setCount((prevValue) => (prevValue < 6 ? prevValue + 1 : 0));
        }}
      />
    </div>
  );
}

export default Filters;
