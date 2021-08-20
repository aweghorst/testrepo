import React from 'react';

const BikeMessage = ( {messages }) => {

    return (
        <div className="container text-center">
            <div>
                {messages &&
                    messages.map(message => (
                        <p className="" key={message._id}>
                        {message.messageBody}
                        </p>
                    ))}
            <p>From: User</p>
            <p>Sent on: Monday</p>
            </div>
            <p>Message Text</p>
        </div>
    )
}

export default BikeMessage;