import React from "react";




const StepCode = () => {


    return(
        <div className="step--container">
            <h1> Wprowadź kod weryfikacyjny </h1>
            <h2> kod został wprowadzony +48 123 456 789 </h2>
            <input className="input" type="text" inputMode="tel" />
            <h3 className="last-element"> Jeśli nie dostałeś kodu możemy Ci go wysłać za 60 sek </h3>
        </div>
    )
}

export default StepCode;