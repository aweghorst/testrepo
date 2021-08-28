import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MESSAGES_FROM_USER } from '../../utils/queries';

function Inbox() {

    const [messagesSent, setMessagesSent] = useState();

    // array of all messages user has posted on bikes
    const { data }  = useQuery(QUERY_MESSAGES_FROM_USER);
    console.log("messagesSent:", data?.userMessages);
    // const messageArray = messages?.userMessages;
    // setMessagesSent(messageArray);

    // filter only messages with replies to add to dashboard inbox
    // const messagesReplied = messageArray?.filter(message => message.replyCount > 0 );
    // console.log("replied messages: ", messagesReplied);
}

export default Inbox;