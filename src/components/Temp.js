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

            // if expression matches 24x (slice operator and store globally)
        // if expression matches 24x38 (do nothing)
        // if expression matches 24x38= (evaluate and return product)
        // if expression matches 24x38+ (slice operator and store globally, evaluate expression, concatinate back together, display)
        // if expression matches 38++ (slice operator and replace, concatinate back together)
        // if expression matches 38+= regexp: [0-9]|\+|-|x|\/)*=$


        // PROBLEM: ALL GETTING CAUGHT HERE IN FIRST IF STATEMENT, MUST MODIFY MATCH TO BE A FULL MATCH
        if(expression.match("([0-9]+(x|\\+|-|\\/){1}){1}")){
            console.log("caught in 1 if")
            setAction(expression.slice(-1))
        }else if(expression.match("[0-9]+(x|\\+|-|\\/){1}[0-9]+")){
            // do nothing
            console.log("caught in 2 if")
        }else if(expression.match("[0-9]+(x|\\+|-|\\/){1}")){
            console.log("caught in 3 if")
            setEvaluation(evaluate(expression.split("(x|\\+|-|\\/)"), action))
            if(evaluation == "error"){
                setExpression("")
                setAction("")
            }else{
                setAction(expression.slice(-1))
                setExpression(evaluation + action)
            }
        }else if(expression.match("[0-9]+(x|\\+|-|\\/){2}")){
            console.log("caught in 4 if")
            setAction(expression.slice(-1))
            setExpression(expression.slice(0, -2) + action)
        }else if(expression.match("([0-9]|\\+|-|x|\\/){2,}=$")){
            console.log("caught in 5 if")
            setEvaluation(evaluate([expression.split("(x|\\+|-|\\/)")[0], expression.split("(x|\\+|-|\\/)")[0]], action))
        }else {
            // do nothing
        }




        // evaluate here
        // evaluation = expression.match("[0-9]+(x|\+|-|/){1}") ? action = expression.slice(-1) :
        //     expression.match("[0-9]+(x|\+|-|/){1}[0-9]+") ? setEvaluation(evaluate(expression.split("[0-9]+(x|\+|-|/){1}[0-9]+", action))) : 
        //     expression.match("") ? true : null
        // THIS WILL TRIGGER A RERENDER EVERY TIME A BUTTON IS CLICKED, WHICH MEANS IT WILL ONLY EVALUATE SINGLE DIGITS
        // ... unless I order them in such a way that the evaluation is done only when a symbol is after (ie + or =)