import React from 'react'

export const EmailTemplate = ({firstName, lastName, email, subject, message}) => {
    return (
        <div>
            <h3>Email came from your portfolio website</h3>
            <br/>
            <h3>Name of Sender: {firstName} {lastName}</h3>
            <br/>
            <h3>Email of Sender: {email}</h3>
            <br/>
            <h3>Subject of Email: {subject}</h3>
            <br/>
            <h3>Message:</h3>
            <p>{message}</p>
        </div>
    )
}