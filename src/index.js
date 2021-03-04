import React from "react";
import ReactDOM from "react-dom";
// import './index.css';


const name ="thapa world";
const img1 ="https://picsum.photos/340/300";
const img2 ="https://picsum.photos/330/300";
const img3 ="https://picsum.photos/320/300";
const img4 ="https://picsum.photos/310/300";
const links ='http://localhost:3000/';
ReactDOM.render(
  <>
<h1 className="heading">zahour{name}</h1>
<img src={img1} />
<img src={img2} />
<img src={img3} />
<a href={links} target="cr7">
<img src={img4} />
</a>
</>, 
  document.getElementById("root"));
