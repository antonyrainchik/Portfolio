import React, {useRef, useEffect, useContext} from 'react'
import {Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router'
import BadgerLoginStatusContext from "../contexts/BadgerLoginStatusContext"

export default function BadgerLogout() {

    const [loginStatus, setLoginStatus] = useContext(BadgerLoginStatusContext)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://cs571.org/api/f23/hw6/logout', {
            method: 'POST',
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            },
            credentials: "include"
        }).then(res => res.json()).then(json => {
            console.log(json)
            if (json.msg === "You have been logged out! Goodbye.") {
                setLoginStatus({ loggedIn: false })
                sessionStorage.removeItem('loginStatus')
                alert(json.msg)
                navigate('/')
            }
        })
    }, [setLoginStatus, navigate])

    return <>
        <h1>Logout</h1>
        <p>You have been successfully logged out.</p>
    </>
    
}
