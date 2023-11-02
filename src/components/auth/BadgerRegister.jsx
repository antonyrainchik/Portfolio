import React , {useState} from 'react'
import {Form, FormLabel, Button} from 'react-bootstrap'

export default function BadgerRegister() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = async () => {
        if (!username || !password) {
            alert("You must provide both a username and password!")
            return
        }

        if (password !== confirmPassword) {
            alert("Your passwords do not match!")
            return
        }
        const response = await fetch('https://cs571.org/api/f23/hw6/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "X-CS571-ID": CS571.getBadgerId()
                },
                credentials: 'include', 
                body: JSON.stringify({ username, password })
            })
            if (response.status === 409) {
                alert("That username has already been taken!")
            }
            else{
                alert("Registration successful!")
            }
            
        }

    return (
        <div>
            <h1>Register</h1>
            <Form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                <Form.Group>
                    <Form.Label htmlFor="Username" >Username:</Form.Label>
                    <Form.Control id="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="Password" >Password:</Form.Label>
                    <Form.Control id = "Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="ConfirmPassword">Confirm Password:</Form.Label>
                    <Form.Control id="ConfirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit">Register</Button>
            </Form>
        </div>
    )
}