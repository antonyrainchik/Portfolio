import React, { useContext , useState, useEffect} from "react"
import { Card , Button} from "react-bootstrap"
import BadgerLoginStatusContext from "../contexts/BadgerLoginStatusContext"


function BadgerMessage(props) {
    const [loginStatus] = useContext(BadgerLoginStatusContext)
   

    const dt = new Date(props.created)
    // console.log(props)

    return <Card style={{margin: "0.5rem", padding: "0.5rem"}}>
        <h2>{props.title}</h2>
        <sub>Posted on {dt.toLocaleDateString()} at {dt.toLocaleTimeString()}</sub>
        <br/>
        <i>{props.poster}</i>
        <p>{props.content}</p>
        {props.currentUser && props.currentUser.username === props.poster && (
                <Button variant="danger" onClick={() => props.onDelete(props.id)}>
                    Delete
                </Button>
        )}
    </Card>
}

export default BadgerMessage