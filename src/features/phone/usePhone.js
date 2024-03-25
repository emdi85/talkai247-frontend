import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAssistants } from '../assistant/assistantSlice';
import { handleCallOutBound, handleSetAssistant, loadAssistantPhone } from './phoneSlice';
function UsePhone() {
    const dispatch = useDispatch()

    const inboundPhoneNumber = useSelector(state => state.inboundPhoneNumber);
    const assistants = useSelector(state => state.assistant.assistants);
    const assistantPhone = useSelector(state => state.phone.assistantPhone);
    const message = useSelector(state => state.phone.message);

    const [outboundPhoneNumber, setOutboundPhoneNumber] = useState('');
    const [selectedAssistant, setSelectedAssistant] = useState('');
    const [selectedOutBoundAssistant, setSelectedOutBoundAssistant] = useState('');
    const [selectedInBoundPhone, setSelectedInBoundPhone] = useState('');
    const [selectedOutBoundPhone, setSelectedOutBoundPhone] = useState('');
    const [hideMessage, setHideMessage] = useState(false);
    useEffect(() => {
        dispatch(loadAssistants());
        dispatch(loadAssistantPhone());
    }, [])

    useEffect(() => {
        if (message) {
            // Set hideMessage to false to display the message
            setHideMessage(false);

            // After 5 seconds, set hideMessage to true to hide the message
            const timer = setTimeout(() => {
                setHideMessage(true);
            }, 2000);

            // Clear the timer when the component unmounts or when message changes
            return () => clearTimeout(timer);
        }
    }, [message]);
    function handleSeletInBoundAssistant(select, Phone) {
        setSelectedAssistant(select);
        dispatch(handleSetAssistant({ select, Phone }));
    }

    return (<div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <h2 className="text-lg font-semibold mb-4">Inbound</h2>
                <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-800">Inbound Phone Number: {inboundPhoneNumber}</p>
                    <select
                        className="border border-gray-300 rounded px-4 py-2 w-full mt-2"
                        value={selectedInBoundPhone}
                        onChange={(e) => setSelectedInBoundPhone(e.target.value)}
                    >
                        <option value=''>Select Assistant</option>
                        {assistantPhone.map((assistantphone, index) => (
                            <option key={index} value={assistantphone.id}>{assistantphone.number}</option>
                        ))}
                    </select>
                </div>
                <div className="bg-gray-100 p-4 rounded mt-4">
                    <p className="text-gray-800">Assistant: {inboundPhoneNumber}</p>
                    <select
                        className="border border-gray-300 rounded px-4 py-2 w-full mt-2"
                        value={selectedAssistant}
                        onChange={(e) => handleSeletInBoundAssistant(e.target.value, selectedInBoundPhone)}
                    >
                        <option value=''>Select Assistant</option>
                        {assistants.map((assistant, index) => (
                            <option key={index} value={assistant.id}>{assistant.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
                <h2 className="text-lg font-semibold mb-4">Outbound</h2>
                <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-800">Inbound Phone Number: {inboundPhoneNumber}</p>
                    <select
                        className="border border-gray-300 rounded px-4 py-2 w-full mt-2"
                        value={selectedOutBoundPhone}
                        onChange={(e) => setSelectedOutBoundPhone(e.target.value)}
                    >
                        <option value=''>Select Assistant</option>
                        {assistantPhone.map((assistantphone, index) => (
                            <option key={index} value={assistantphone.id}>{assistantphone.number}</option>
                        ))}
                    </select>
                    <p className="text-gray-800">Choose Number to call from:</p>
                    <input
                        type="text"
                        className="border border-gray-300 rounded px-3 py-1 mt-2 w-full"
                        value={outboundPhoneNumber}
                        onChange={(e) => setOutboundPhoneNumber(e.target.value)}
                        placeholder="Enter new outbound phone number"
                    />
                    <p className="text-gray-800">Number you wish to call:</p>
                    <select
                        className="border border-gray-300 rounded px-4 py-2 w-full mt-2"
                        value={selectedOutBoundAssistant}
                        onChange={(e) => setSelectedOutBoundAssistant(e.target.value)}
                    >
                        <option value=''>Choose Assistant for the call</option>
                        {assistants.map((assistant, index) => (
                            <option key={index} value={assistant.id}>{assistant.name}</option>
                        ))}
                    </select>
                    <div className="flex items-center justify-center">
                        <button className="bg-purple-700 text-white py-2 px-4 rounded-md" 
                                onClick={() => dispatch(handleCallOutBound({ selectedOutBoundAssistant, selectedOutBoundPhone, outboundPhoneNumber }))}
                        >
                            Outbound Call
                        </button>
                        {!hideMessage && message && (
                            <div className="bg-red-200 text-red-800 py-2 px-4 rounded-md">
                                Outbound call {message} successfully
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default UsePhone;
