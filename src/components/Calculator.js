import React, {useState, useEffect} from 'react'
import {Button, Container, Table} from 'reactstrap'

function Calculator() {

    const [expression, setExpression] = useState("")
    const [evaluation, setEvaluation] = useState(0)
    const [action, setAction] = useState("")
    const [values, setValues] = useState([""])

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
        if(expression.match("[0-9]")){
            values.length < 2 ? values[0] += expression : values[1] += expression
        }else{ // if +-x/=

            if(expression == "="){
                if(action == ""){
                    // do nothing
                    
                }else{
                    /////////// evaluate with value[0] action value[0] and setEvaluation SAVE FOR LATER

                    // evaluate and setEvaluation
                    setEvaluation(evaluate(values, action))
                    
                }
                // reset expression, action, and values to default
                setExpression("")
                setAction("")
                setValues([""])
                
            }else if(action != "" && expression.match("\\+|-|x|\\/")){
                // replace action with expression
            }else if(action == "" && expression.match("\\+|-|x|\\/")){
                // action == "" so we must assign action and add a new string to values
                // setAction(expression)
                // setValues([...values, ""])
            }




            // if(action == ""){ // if action is not present (ie is first action)
            //     // assign
            // }else if(expression == "="){ // check if current action is = 
            //     // evaluate and setEvaluation
            //     // reset expression, action, and values to default
            // }
            // else {
                
            //     // evaluate first half, assign to 
            // }
        }
    })

    return (
        <Container>
            {console.log("expression: " + expression)}
            {console.log("evaluation: " + evaluation)}
            {console.log("action: " + action)}
            {console.log("values: " + values)}

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
                        <td><Button onClick={() => setExpression("/")} className="btn-block" color="warning">÷</Button></td>

                    </tr>
                    <tr>
                        <td><Button onClick={() => setExpression("7")} className="btn-block" color="light">7</Button></td>
                        <td><Button onClick={() => setExpression("8")} className="btn-block" color="light">8</Button></td>
                        <td><Button onClick={() => setExpression("9")} className="btn-block" color="light">9</Button></td>
                        <td><Button onClick={() => setExpression("x")} className="btn-block" color="warning">x</Button></td>
                    </tr>
                    <tr>
                        <td><Button onClick={() => setExpression("4")} className="btn-block" color="light">4</Button></td>
                        <td><Button onClick={() => setExpression("5")} className="btn-block" color="light">5</Button></td>
                        <td><Button onClick={() => setExpression("6")} className="btn-block" color="light">6</Button></td>
                        <td><Button onClick={() => setExpression("-")} className="btn-block" color="warning">-</Button></td>
                    </tr>
                    <tr>
                        <td><Button onClick={() => setExpression("1")} className="btn-block" color="light">1</Button></td>
                        <td><Button onClick={() => setExpression("2")} className="btn-block" color="light">2</Button></td>
                        <td><Button onClick={() => setExpression("3")} className="btn-block" color="light">3</Button></td>
                        <td><Button onClick={() => setExpression("+")} className="btn-block" color="warning">+</Button></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><Button onClick={() => setExpression("0")} className="btn-block" color="light">0</Button></td>
                        <td><Button className="btn-block" color="light">.</Button></td>
                        <td><Button onClick={() => setExpression("=")} className="btn-block" color="warning">=</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Calculator
