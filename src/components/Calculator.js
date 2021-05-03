import React, {useReducer, useState} from 'react'
import {Button, Container, Table} from 'reactstrap'

function Calculator() {

    // implement decimal abilities later
    // if(action.value == "."){

    // }

    // const [displayValue, setDisplayValue] = useState(0)
    const [actionValue, setActionValue] = useState(0)
    const [action, setAction] = useState("")


    const reducer = (state, action) => {
        switch (action.type) {

            case 'concatinate':
                return state * 10 + actionValue;
            case 'evaluate':
                switch (action.operator) {
                    case 'add':
                        return state + actionValue
                    case 'subtract':
                        return state - actionValue
                    case 'divide':
                        return state / actionValue
                    case 'multiply':
                        return state * actionValue
                    default:
                        return state
                }
            case 'backspace':
                return Math.floor(state / 10)
            case 'clear':
                setActionValue(0)
                return 0
            default:
                return state

            // case 'add':
            //     return state + action.value
            // case 'subtract':
            //     return state - action.value
            // case 'divide':
            //     return state / action.value
            // case 'multiply':
            //     return state * action.value
            // case 'concatinate':
            //     return state * 10 + action.value
            // case 'clear':
            //     return 0
            // default:
            //     return state
        }
    }

    const [count, dispach] = useReducer(reducer, 0)

    return (
        <Container>
            <h1>Calculator App Using React Hooks</h1>
            {console.log("count: " + count)}
            {console.log("actionValue: " + actionValue)}
            {console.log("action: " + action)}
            <Table className="col-2 offset-5" borderless>
                <thead>
                    <tr>
                        <th colSpan="4" className="bg-dark text-light text-right">{count}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Button onClick={() => dispach({type:"clear", operator:""})} className="btn-block">AC</Button></td>
                        <td><Button className="btn-block">+/-</Button></td>
                        <td><Button className="btn-block">%</Button></td>
                        {/* <td><Button onClick={() => dispach({type: 'divide', value: count})} className="btn-block" color="warning">÷</Button></td> */}
                        <td><Button onClick={() => dispach({type:"clear", operator:""})} className="btn-block" color="warning">÷</Button></td>

                    </tr>
                    <tr>
                        <td><Button onClick={() => {setActionValue(7); dispach({action: "concatinate", value: 7})}} className="btn-block" color="light">7</Button></td>
                        <td><Button onClick={() => setActionValue(8)} className="btn-block" color="light">8</Button></td>
                        <td><Button onClick={() => setActionValue(9)} className="btn-block" color="light">9</Button></td>
                        <td><Button onClick={() => setAction("multiply")} className="btn-block" color="warning">x</Button></td>
                    </tr>
                    <tr>
                        <td><Button onClick={() => setActionValue(4)} className="btn-block" color="light">4</Button></td>
                        <td><Button onClick={() => setActionValue(5)} className="btn-block" color="light">5</Button></td>
                        <td><Button onClick={() => setActionValue(6)} className="btn-block" color="light">6</Button></td>
                        <td><Button onClick={() => setAction("subtract")} className="btn-block" color="warning">-</Button></td>
                    </tr>
                    <tr>
                        <td><Button onClick={() => setActionValue(1)} className="btn-block" color="light">1</Button></td>
                        <td><Button onClick={() => setActionValue(2)} className="btn-block" color="light">2</Button></td>
                        <td><Button onClick={() => setActionValue(3)} className="btn-block" color="light">3</Button></td>
                        <td><Button onClick={() => setAction("add")} className="btn-block" color="warning">+</Button></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><Button className="btn-block" color="light">0</Button></td>
                        <td><Button className="btn-block" color="light">.</Button></td>
                        <td><Button onClick={() => dispach({type: action, value: actionValue})} className="btn-block" color="warning">=</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Calculator
