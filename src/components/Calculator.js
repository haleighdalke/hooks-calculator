import React, {useState, useEffect} from 'react'
import {Button, Container, Table} from 'reactstrap'

function Calculator() {

    const [expression, setExpression] = useState("")
    const [evaluation, setEvaluation] = useState(0)
    const action = ""

    let evaluate = (arr, operand) => {
        switch (operand) {
            case "+":
                return arr[0] + arr[1]
            case "-":
                return arr[0] - arr[1]
            case "x":
                return arr[0] * arr[1]
            case "/":
                return arr[0] / arr[1]
            default:
                return "error";
        }
    }

    useEffect(() => {
        // evaluate here
        // evaluation = expression.match("[0-9]+(x|\+|-|/){1}") ? action = expression.slice(-1) :
        //     expression.match("[0-9]+(x|\+|-|/){1}[0-9]+") ? setEvaluation(evaluate(expression.split("[0-9]+(x|\+|-|/){1}[0-9]+", action))) : 
        //     expression.match("") ? true : null
        // THIS WILL TRIGGER A RERENDER EVERY TIME A BUTTON IS CLICKED, WHICH MEANS IT WILL ONLY EVALUATE SINGLE DIGITS
        // ... unless I order them in such a way that the evaluation is done only when a symbol is after (ie + or =)
    })

    return (
        <Container>
            <h1>Calculator App Using React Hooks</h1>
            <Table className="col-2 offset-5" borderless>
                <thead>
                    <tr>
                        <th colSpan="4" className="bg-dark text-light text-right">{evaluation}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Button onClick={() => 0} className="btn-block">AC</Button></td>
                        <td><Button className="btn-block">+/-</Button></td>
                        <td><Button className="btn-block">%</Button></td>
                        {/* <td><Button onClick={() => divide', value: count})} className="btn-block" color="warning">÷</Button></td> */}
                        <td><Button onClick={() => setExpression(expression + "/")} className="btn-block" color="warning">÷</Button></td>

                    </tr>
                    <tr>
                        <td><Button onClick={() => setExpression(expression + "7")} className="btn-block" color="light">7</Button></td>
                        <td><Button onClick={() => setExpression(expression + "8")} className="btn-block" color="light">8</Button></td>
                        <td><Button onClick={() => setExpression(expression + "9")} className="btn-block" color="light">9</Button></td>
                        <td><Button onClick={() => setExpression(expression + "x")} className="btn-block" color="warning">x</Button></td>
                    </tr>
                    <tr>
                        <td><Button onClick={() => setExpression(expression + "4")} className="btn-block" color="light">4</Button></td>
                        <td><Button onClick={() => setExpression(expression + "5")} className="btn-block" color="light">5</Button></td>
                        <td><Button onClick={() => setExpression(expression + "6")} className="btn-block" color="light">6</Button></td>
                        <td><Button onClick={() => setExpression(expression + "-")} className="btn-block" color="warning">-</Button></td>
                    </tr>
                    <tr>
                        <td><Button onClick={() => setExpression(expression + "1")} className="btn-block" color="light">1</Button></td>
                        <td><Button onClick={() => setExpression(expression + "2")} className="btn-block" color="light">2</Button></td>
                        <td><Button onClick={() => setExpression(expression + "3")} className="btn-block" color="light">3</Button></td>
                        <td><Button onClick={() => setExpression(expression + "+")} className="btn-block" color="warning">+</Button></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><Button onClick={() => setExpression(expression + "0")} className="btn-block" color="light">0</Button></td>
                        <td><Button className="btn-block" color="light">.</Button></td>
                        <td><Button onClick={() => setExpression(expression + "=")} className="btn-block" color="warning">=</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Calculator
