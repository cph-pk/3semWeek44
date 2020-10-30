import React, { useState } from "react";

function MemberTable({ members }) {
    return (
        <table>
            <thead><tr><th>Name</th><th>Age</th></tr></thead>
            <tbody><MemberDemo members={members} /></tbody>
        </table>
    );
}

function MemberDemo(props) {
    return props.members.map((members) => {
        const { name, age } = members; //destructuring
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>{age}</td>
            </tr>
        );
    });
}

export default function AppList() {
    const initialMembers = [
        { name: "Peter", age: 18 },
        { name: "Hanne", age: 35 },
        { name: "Janne", age: 25 },
        { name: "Holger", age: 22 }
    ];
    const [members, setMembers] = useState(initialMembers)

    return <MemberTable members={members} />;
}
