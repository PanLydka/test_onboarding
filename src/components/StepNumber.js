import React from "react";
import { Link } from "gatsby"



const StepNumber = () => {


    return(
        <div className="step--container">
            <h1> Numer telefonu komórkowego </h1>
            <h2> wyślemy na niego kod weryfikujący podane dane</h2>
            <input className="input last-element" type="text" inputMode="tel" />

            <Link to="/verification"> weryfikacja </Link>
        </div>
    )
}

export default StepNumber;