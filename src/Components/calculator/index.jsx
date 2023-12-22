import React, { useState } from "react";
import Table from "../table";
import styles from './calculator.module.css'

function Calculator() {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const bmi = isValid(height) && isValid(weight) ? calculatesBMI(weight, height) : null

    function calculatesBMI(weight, height) {
        let heightCM = height / 100
        return weight / (heightCM * heightCM)
    }

    function isValid(value) {
        const number = parseFloat(value)
        return !isNaN(number) && number > 0
    }

    const showTable = isValid(height) && isValid(weight)

    const resetInput = () => {
        setHeight('')
        setWeight('')
    }

    return (
        <div className={styles["calculatorContainer"]}>
            <h1>BMI Calculator</h1>
            <input className={styles["input"]} placeholder="Your Height(cm)" type="number" value={height} onChange={(event => setHeight(event.target.value))} />
            <input className={styles["input"]} placeholder="Your Weight(kg))" type="number" value={weight} onChange={(event => setWeight(event.target.value))} />

            <div className="calculator-container">
                {bmi && <p className={styles["table-container"]} ><b>Your BMI is: </b>{bmi.toFixed(2)}</p>}
                {showTable && <div className={styles["table-container"]}><Table /></div>}
                {showTable && (
                    <div>
                        <button onClick={resetInput}>Reset</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Calculator