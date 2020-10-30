import React, { useState } from "react"

const redborder = {
    border: '2px solid red',
    width: '400px',
    margin: '5px'
}

const parentborder = {
    border: '2px solid green',
    width: '414px',
    margin: 'auto'
}

const blueborder = {
    border: '2px solid blue',
    width: '400px',
    margin: '5px'
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

const FtoC = () => {
    const [state, setState] = useState({});
    const update = (event) => {
        const name = event.target.value;
        const newName = toCelsius(name);
        setState({ newName });
    }
    // const render = () => {
    return (<div style={parentborder}>
        <h2>Parent componet holding the state</h2>
        <InputComp update={update}></InputComp>
        <ShowComp newName={state.newName}></ShowComp>
    </div>);
    // }
}

const InputComp = (props) => {
    return (<div style={redborder}>
        <input type="text" onChange={props.update} placeholder="Farhenheit to Celcius" />
    </div>);
}

const ShowComp = (props) => {
    return <div style={blueborder}>Celcius:
        {props.newName}
    </div>
}

export default FtoC;