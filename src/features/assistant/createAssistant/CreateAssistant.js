import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleCreateAssistant } from '../assistantSlice';

export function CreateAssistant() {

    const dispatch = useDispatch();

    const [assistantName, setAssistantName] = useState('');
    const [firstMessage, setFirstMessage] = useState('');
    const [systemPrompt, setSystemPrompt] = useState('');
    
    return (
        <div className="App mt-8 max-w-7xl m-auto justify-center ">
          <div className="flex justify-between p-4 gap-10">
        <div className="col w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Lorem ipsum dolor
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            mollis neque non hendrerit pellentesque. Sed maximus, orci id
            pharetra rhoncus, enim tortor dictum leo, vel lacinia arcu purus
            sit amet nisi. In imperdiet, lorem non vulputate faucibus, lectus
            felis congue urna, vitae v ulputate mi justo convallis nisi. Sed
            consequat tempus fringilla. Nam vehicula metus non hendrerit
            ornare. Etiam aliquet vel nisl at venenatis. Aenean condimentum
            volutpat lobortis. In sit amet ante et lorem placerat hendrerit ut
            eget urna. Aliquam ligula risus, pretium ac dolor id, fringilla
            auctor mi. Nam id lacus est.
          </p>
        </div>
        <div className='col w-1/2 p-4 bg-white rounded-lg'>
            <h1 className="text-purple-700 text-2xl font-bold mb-4">Create New Assistant</h1>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="assistantName">Assistant Name</label>
                    <input type='text' id="assistantName" className="bg-fuchsia-100	border border-fuchsia-300 rounded-md px-4 py-2 w-full" placeholder="Enter Assistant Name" value={assistantName} onChange={(e) => setAssistantName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="firstMessage">First Message</label>
                    <input type='text' id="firstMessage" className="bg-fuchsia-100 border border-fuchsia-300 rounded-md px-4 py-2 w-full" placeholder="Enter First Message" value={firstMessage} onChange={(e) => setFirstMessage(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="systemPrompt">System Prompt</label>
                    <textarea id="systemPrompt" className="bg-fuchsia-100	border border-fuchsia-300 rounded-md px-4 py-2 w-full" placeholder="Enter System Prompt" value={systemPrompt} onChange={(e) => setSystemPrompt(e.target.value)}></textarea>
                </div>
                <button 
                    className="bg-purple-700 text-white py-2 px-4 rounded-md"
                    onClick={() => dispatch(handleCreateAssistant({assistantName, firstMessage, systemPrompt}))}>
                Create New Assistant
                </button>
        </div>
    </div></div>)
}