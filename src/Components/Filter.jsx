import React from "react";
import { useState ,useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const handleCheckbox = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if(newCategory.includes(option)){
      newCategory.splice(newCategory.indexOf(option),1);
    }
    else{
      newCategory.push(option);
    }
    setCategory(newCategory);
  }
  useEffect(() => {
    if(category){
      setSearchParams({category : category});
    }
  }, [category,setSearchParams])

  return (
    <div
      style={{ width: "12%", marginLeft: "10px", border: "2px solid black" }}
    >
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            checked={category.includes("Sneakers")}
            value="Sneakers"
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" onChange={handleCheckbox}
            checked={category.includes("Loafers")}/>
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" onChange={handleCheckbox}
            checked={category.includes("Canvas")} />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" onChange={handleCheckbox}
            checked={category.includes("Boots")} />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
