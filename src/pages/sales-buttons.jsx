import React from "react";

import '../styles/sales-buttons.scss'
const SalesButons = (props) => {

const aim = props.name.split(' ')[0]

    return ( <div className="SalesButtons">
      
		<button className="ask" >Ask for product</button>
      
		<button className="buy" onClick={ () => window.open(`https://www.etsy.com/pl/shop/MagicConcreteDesign?search_query=${aim}`, '_blank')}>Buy on Etsy</button>
    </div> );
}
 
export default SalesButons;


