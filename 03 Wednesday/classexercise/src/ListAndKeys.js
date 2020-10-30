import React from 'react';

// A component that can render a list of names
function NameList(props) {

    const names = props.names;
    const listItems = names.map((name) =>
        <li key={name.toString()}>
            {name}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default NameList;