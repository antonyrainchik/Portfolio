import React, {useRef, useContext} from 'react'
import {Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router'
import BadgerLoginStatusContext from "../contexts/BadgerLoginStatusContext"

export default function BadgerLogin() {
        const usernameRef = useRef(null)
        const passwordRef = useRef(null)
        const navigate = useNavigate()
    
        const [loginStatus, setLoginStatus] = useContext(BadgerLoginStatusContext)

        const handleLogin = async () => {
            const username = usernameRef.current.value
            const password = passwordRef.current.value
    
            if (!username || !password) {
                alert("You must provide both a username and password!")
                return
            }
    
            
            const response = await fetch('https://cs571.org/api/f23/hw6/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "X-CS571-ID": CS571.getBadgerId() 
                },
                credentials: 'include', 
                body: JSON.stringify({ username, password })
            })
        
            if (response.status === 401) {
               alert("Incorrect username or password!")
            } else if (response.status === 200){
                alert("Login successful!")
                setLoginStatus({ loggedIn: true })
                navigate('/')
            }
                
        }
    
    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <Form.Group controlId="loginUsername">
                    <Form.Label htmlFor="Username">Username:</Form.Label>
                    <Form.Control id="Username" type="text" ref={usernameRef}/>
                </Form.Group>
                <Form.Group controlId="loginPassword">
                    <Form.Label htmlFor="Password">Password:</Form.Label>
                    <Form.Control id="Password" type="password" ref={passwordRef}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}
