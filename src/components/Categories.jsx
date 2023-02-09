import React from "react";

function Categories({ value, onClickCategory }) {
  const categories = [
    "Все",
    "Вегетарианская",
    "Гриль",
    "Мясные",
    "Острые",
    "Закрытые",
  ];

  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  //   console.log(index);
  // };

  return (
    <div className="categories">
      <ul>
        <ul>
          {categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={value === index ? "active" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default Categories;
