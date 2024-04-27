import "./Product.css";
import Price from "./Price";

function Product({title , idx}) {
let oldPrices =["12,499", "11,990", "1,599" ,"599"];
let newPrices =["8,999" , "9,199", "899", "300"];
let  description =[
    ["8,000 DPI" , "5 programmable buttons"] ,
    ["inclutive surface" , "designed for ipad Pro"],
    ["designed for ipad Pro", "inclutive surface"] ,
    ["wireless" ,"optical orientation"],
    ];
  return(
    <div className="Product">
      <h1>{title}</h1>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  );
}

export default Product;