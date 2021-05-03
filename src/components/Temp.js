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