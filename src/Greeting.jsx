import {useState} from "react";

function randomGreeting() {
  let greeting = Math.floor(Math.random() * 3 + 1)
  switch (greeting) {
    case 1:
      return "Hello";
    case 2:
      return "Good day";
    case 3:
      return "Greetings";
    default:
      return "Hello";
  }
}

function Greeting(props) {
  const textColor = "beige";
  const today = new Date().toLocaleDateString("en-US", {month: "long", day: "2-digit", year: "numeric"});
  const [greeting, setGreeting] = useState("Hello");
  return (
    <>
        <h1>{greeting}, {props.username}!</h1>
        <p>Today's date: {today}</p>
        <button onClick={() => setGreeting(randomGreeting())}>Change Greeting</button>
        <p style={{color: "beige"}}>This text is {textColor}.</p>
    </>
  )
}

export default Greeting;