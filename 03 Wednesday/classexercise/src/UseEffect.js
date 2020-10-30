import { useState, useEffect } from "react";

// A functional component that when loaded gets data from api and renders it as an html table
function Albums() {
    const [album, setAlbum] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/albums").then(res => res.json()).then(data => {
            setAlbum(data);
        })
    }, []);

    const table = album.map(elm => {
        return <tr key={elm.id}><td>{elm.userId}</td><td>{elm.id}</td><td>{elm.title}</td></tr>
    })

    return (
        <div>
            <table>
                <thead><tr><th>UserId</th><th>Id</th><th>Title</th></tr></thead>
                <tbody>{table}</tbody>
            </table>
        </div >
    )
}

export default Albums;