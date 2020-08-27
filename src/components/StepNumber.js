import React from "react";




const StepNumber = () => {


    return(
        <div className="step--container">
            <h1> Numer telefonu komórkowego </h1>
            <h2> wyślemy na niego kod weryfikujący podane dane</h2>
            <input className="input last-element" type="text" inputMode="tel" />

            <a href="/verification"> weryfikacja </a>
        </div>
    )
}

export default StepNumber;