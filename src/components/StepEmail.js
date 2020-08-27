import React from "react";




const StepEmail = () => {


    return(
        <div className="step--container">
            <h1> Adres e-mail </h1>
            <h2> Będziemy go używać wyłącznie w celu prezazywania istotnych informacji. </h2>
            <h2> Będziesz mógł w dowolne chwili wyłączyć takie wiadomości	 </h2>

            <input className="input" inputmode="email" placeholder="email" />
            <input className=" input last-element" inputmode="email" placeholder="powtorz email" />
          
        </div>
    )
}

export default StepEmail;