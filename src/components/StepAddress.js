import React from "react";




const StepAddress = () => {


    return(
        <div className="step--container">
            <h1> Adres zamieszkania</h1>
            <h2> Nie podawaj skrytki pocztowej, możemy cię poprosić o dokument potwierdzający ten adres </h2>
            <div className="select">
                <select>
                    <option>Kraj</option>
                    <option>POlska</option>
                    <option> Niemcy </option>
                    <option> Chiny </option>
                    <option> Francja </option>
                    <option> Mongolia </option>
                    <option> Luksemburg </option>
                    <option> Finlandia </option>
                </select>
            </div>

            <input className="input" placeholder="Adres linia 1" />
            <input className="input" placeholder="Adres linia 2" />
            <input className="input" placeholder="Kod pocztowy" inputMode="decimal" />
            <input className="input" placeholder="miasto" />
            <input className="input last-element" placeholder="region ??" />
        </div>
    )
}

export default StepAddress;