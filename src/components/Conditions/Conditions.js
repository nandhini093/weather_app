import React from 'react';
import classes from './Conditions.module.css';
const conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
               :null
           }
       </div>
   )
   

}
<div className={classes.Wrapper}></div>
export default Conditions;