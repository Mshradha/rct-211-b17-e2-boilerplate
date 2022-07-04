import React from "react";

const ShoeCard = ({id,name,image,category}) => {
  let shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}` } style={{border:"2px solid black",display:"block",width:"300px",height:"350px"}}>
      <div style={{display:"flex",height:"300px",flexDirection:"column"}}>
        <img style={{height:"300px",width:"100%",margin:"auto"}} data-cy="shoe-card-image" src={image} alt="aaaa" />
      </div>
      <div>
        <div data-cy="shoe-name">{name}</div>
        <div data-cy="shoe-category">{category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
