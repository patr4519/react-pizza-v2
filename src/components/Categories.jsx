import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    "Все",
    "Вегетарианская",
    "Гриль",
    "Мясные",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (index) => {
    setActiveIndex(index);
    console.log(index);
  };

  return (
    <div className="categories">
      <ul>
        <ul>
          {categories.map((item, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default Categories;
