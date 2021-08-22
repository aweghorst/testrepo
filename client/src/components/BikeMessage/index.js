import React from 'react';

const BikeMessage = ({bikeMessages}) => {

    return (
        <div className="container text-center">
            <div>
                {bikeMessages &&
                    bikeMessages.map(message => (
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