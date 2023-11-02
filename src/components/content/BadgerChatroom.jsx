import React, { useEffect, useState, useContext} from "react"
import { Card, Col, Container, Row, Pagination, Form, Button, Alert} from "react-bootstrap"
import BadgerMessage from "./BadgerMessage"
import BadgerLoginStatusContext from "../contexts/BadgerLoginStatusContext"

export default function BadgerChatroom(props) {

    const [messages, setMessages] = useState([])
    const [loginStatus] = useContext(BadgerLoginStatusContext)
    const [postTitle, setPostTitle] = useState("")
    const [postContent, setPostContent] = useState("")

    const loadMessages = () => {
        fetch(`https://cs571.org/api/f23/hw6/messages?chatroom=${props.name}&page=1`, {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        }).then(res => res.json()).then(json => {
            setMessages(json.messages)
        })
    }

    useEffect(loadMessages, [props])

    const [currentPage, setCurrentPage] = useState(1)
    const messagesToShow = messages.slice((currentPage - 1) * 25, currentPage * 25)

    const handleDeletePost = (messageId) => {
        fetch(`https://cs571.org/api/f23/hw6/messages/?id=${messageId}`, {
            method: 'DELETE',
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            },
            credentials: "include"
        }).then(res => res.json()).then(data => {
            //console.log(data)
            loadMessages()
            alert(data.msg)

        })
    }
        

    const [currentUser, setCurrentUser] = useState({ username: '' })

    useEffect(() => {
        fetch('https://cs571.org/api/f23/hw6/whoami', {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            },
            credentials: "include"
        }).then(res => res.json()).then(json => {
            setCurrentUser(json.user)

        })
    }, [])
    

    const handlePostSubmit = (e) => {
        e.preventDefault()
        if (!postTitle || !postContent) {
            alert("You must provide both a title and content!")
            return
        }
        fetch(`https://cs571.org/api/f23/hw6/messages?chatroom=${props.name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "X-CS571-ID": CS571.getBadgerId()
            },
            credentials: "include",
            body: JSON.stringify({
                title: postTitle,
                content: postContent,
            })
        }).then(res => res.json()).then(json => {
            if (json.msg = "Successfully posted message!") {
                alert(json.msg)
                loadMessages()
                setPostTitle("")
                setPostContent("")
            } else {
                console.log("error")
                alert("Error posting the message!")
            }
        })
    }

    return <>
        <h1>{props.name} Chatroom</h1>
        {
            loginStatus?.loggedIn ? (
                <div>
                    <Form onSubmit={handlePostSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="postTitle">Post Title</Form.Label>
                            <Form.Control id = "postTitle" type="text" placeholder="Enter post title" value={postTitle} onChange={e => setPostTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="postContent">Post Content</Form.Label>
                            <Form.Control id = "postContent"as="textarea" rows={3} value={postContent} onChange={e => setPostContent(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Create Post</Button>
                    </Form>
                </div>
            ) : (
                <Alert variant="info">You must be logged in to post!</Alert>
            )
            
        }
        <hr/>
        {
            messagesToShow.length > 0 ?
                <>
                    <Container>
                        <Row>
                            {
                                messagesToShow.map((message, index) => {
                                    return <Col key={index} xl={3} lg={4} sm={6} xs={12}>
                                    <BadgerMessage 
                                        currentUser={currentUser}
                                        title={message.title}
                                        poster={message.poster}
                                        content={message.content}
                                        created={message.created}
                                        onDelete={handleDeletePost}
                                        id={message.id}
                                    />
                                </Col>
                                })
                            }
                        </Row>
                        <Pagination>
                            {[1,2,3,4].map(pageNumber => (
                                <Pagination.Item key={pageNumber} active={pageNumber === currentPage} onClick={() => setCurrentPage(pageNumber)}>
                                    {pageNumber}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </Container>
                </>
                :
                <>
                    <p>There are no messages on this page yet!</p>
                    <Pagination>
                            {[1,2,3,4].map(pageNumber => (
                                <Pagination.Item key={pageNumber} active={pageNumber === currentPage} onClick={() => setCurrentPage(pageNumber)}>
                                    {pageNumber}
                                </Pagination.Item>
                            ))}
                    </Pagination>
                </>
        }
    </>
}
