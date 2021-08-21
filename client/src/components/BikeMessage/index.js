import React from 'react';

const BikeMessage = ({messages}) => {

    return (
        <div className="container text-center">
            <div>
                {messages &&
                    messages.map(message => (
                        <p className="" key={message._id}>
                        {message.messageBody}
                        posted by
                        {message.username} on {message.createdAt}
                        </p>
                    ))}
            </div>
        </div>
    )
}

export default BikeMessage;