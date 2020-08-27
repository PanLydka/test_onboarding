import React from "react";




const StepNames = () => {


    return(
        <div className="step--container">
            <h1> Imię i nazwisko </h1>
            <h2>formalne imię i nzwisko z dokumentu tożsamości</h2>
            <input className="input" type="text" placeholder="Imię lub imiona" />
            <input className="input last-element" type="text" placeholder="Nazwisko" />
        </div>
    )
}

export default StepNames;