import React from "react";




const StepMoney = () => {


    return(
        <div className="step--container">
            <h1> Informacja o pochodzeniu Twojego majątku i źródeł przychodów </h1>
            <h2> Musimy Cię o to zapytać z powodów formalnych, nie będziemy wykorzystywać tych informacji w innych celach </h2>
            <div className="select">
                <select>
                    <option> Wartość twojego majątku </option>
                    <option>Poniżej 100 000 PLN</option>
                    <option>Pomiędzy 100 000 - 500 000 PLN</option>
                    <option> Powyżej 500 000 PLN </option>
                </select>
            </div>

            <div className="select">
                <select>
                    <option>Źródło majątku</option>
                    <option> Wynagrodzenie </option>
                    <option> przychody z udziaów w spółkach </option>
                    <option> przychody inwestycyjne </option>
                    <option> spadek/otrzymanie darowizny </option>
                    <option> hazard </option>
                    <option> kryptowaluty </option>
                    <option> inne (tu miejsce do wpisania) ?? jak user to wybierze, to pokazujemy inputa czy jak?</option>
                </select>
            </div>

            <div className="select last-element">
                <select>
                    <option>Kraj pochodzenia majątku </option>
                    <option>POlska</option>
                    <option> Niemcy </option>
                    <option> Chiny </option>
                    <option> Francja </option>
                    <option> Mongolia </option>
                    <option> Luksemburg </option>
                    <option> Finlandia </option>
                </select>
            </div>
        </div>
    )
}

export default StepMoney;