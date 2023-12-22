import React from "react";

function Table(){
    return(
        <table>
            <thead>
                <tr>
                    <th>BMI Category</th>
                    <th>BMI Range</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Underweight</td>
                    <td>Less than 18.5</td>
                </tr>
                <tr>
                    <td>Normal</td>
                    <td>Between 18.5 and  24,9</td>
                </tr>
                <tr>
                    <td>Overweight</td>
                    <td>Between 25.0 and 29.9</td>
                </tr>
                <tr>
                    <td>Obesity</td>
                    <td>Between 30.0 and 39.9</td>
                </tr>
                <tr>
                    <td>Morbid Obesity</td>
                    <td>More than 40.0</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table