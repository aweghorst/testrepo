import React from 'react';

const MessageForm = () => {

    return (
        <div className="flex justify-center p-20">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">Let user know what you know!</label>
                    <textarea className="border rounded-md outline" rows="8" cols="30" placeholder="type your message here!"></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MessageForm;