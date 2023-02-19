import { useContext, useState, useEffect } from "react";
import { MessageContext } from "../Contexts/MessageProvider";
import DogPage from "../Pages/DogPage";

function Dog(props){

    //We would like to replace this with a context API
    //const [message, setMessage] = useState("Hello Word!")
    const [message, setMessage] = useContext(MessageContext)

    return (
        <>
        <h1>Click the button to see a dog!</h1>
        <button onClick={props.newDogPicture}>Dog Picture</button>
        <div>
            <img src={props.dogPicture} alt="Dog" />
        </div>
        <h4>Peace of state: {message}</h4>
        </>
    )
}

export default Dog;