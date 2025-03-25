import {useState} from "react";

function UserInfo ({handleClick}) {
    const username = "Nick";
    const profession = "Computer Science";
    const [luckyNumber, generateLucky] = useState(16)

    return(
        <div>
            <h2>User Information</h2>
            <p>Username: {username}</p>
            <p>Profession: {profession}</p>
            <p>Your lucky number is: {luckyNumber}</p>
            <button onClick={() => generateLucky(Math.floor(Math.random() * 100 + 1))}>Generate New Lucky Number</button>
            <br/>
            <button onClick={handleClick}>Show alert</button>
            <p>(Clicking the button shows an alert message)</p>
        </div>
    )
}

export default UserInfo;