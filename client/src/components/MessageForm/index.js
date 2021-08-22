import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MESSAGE } from '../../utils/mutations';

const MessageForm = (bikeId) => {

    const [ messageBody, setText] = useState('');
    const [ addMessage, { error }] = useMutation(ADD_MESSAGE);

    function handleChange(event) {
        setText(event.target.value);
    }

    async function handleFormSubmit(event) {
        event.preventDefault();

        try {
            await addMessage({
                variables: { bikeId, messageBody }
            });

            setText('');
        }
        catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="flex justify-center p-20">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">Let user know what you know!</label>
                    <textarea className="border rounded-md outline" rows="8" cols="30" placeholder="type your message here!" onChange={handleChange}></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MessageForm;