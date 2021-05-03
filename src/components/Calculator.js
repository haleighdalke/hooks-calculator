import React, {useReducer} from 'react'
// import {Button} from 'reactstrap'

function Calculator() {
    // const initialState = {
    //     count: 0
    // }

    const reducer = (state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'subtract':
                return state - 1
            case 'divide':
                return state / 2
            case 'multiply':
                return state * 2
            default:
                return state
        }
    }

    const [count, dispach] = useReducer(reducer, 0)

    return (
        <div>
            <button onClick={() => dispach('add')}>Add</button>
            <button onClick={() => dispach('subtract')}>subtract</button>
            <button onClick={() => dispach('divide')}>divide</button>
            <button onClick={() => dispach('multiply')}>multiply</button>
            <div>
                Count: {count}
            </div>
        {/* <Button></Button> */}
        </div>
    )
}

export default Calculator
