import React from "react";
import Filter from "../Components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import { useLocation, useSearchParams } from "react-router-dom";

const Shoes = () => {
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.AppReducer.shoes);
  const location = useLocation()
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let getShoesParams;
    if(location.search || shoes.length ===0){
      getShoesParams = {
        params : {
          category : searchParams.getAll("category"),
        }
      }
    }
    dispatch(getData(getShoesParams));
  }, [location.search]);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Filter />
      <div
        style={{
          border: "1px solid black",
          width: "95%",
          marginLeft: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px, max-content))",
          gap: "12px",
          margin: "auto",
        }}
      >
        {shoes.length > 0 &&
          shoes.map((el) => {
            return (
              <div key={el.id}>
                <ShoeCard {...el} />
              </div>
            );
          })}
        {/* Map through the shoes list here using ShoeCard Component */}
      </div>
    </div>
  );
};

export default Shoes;
