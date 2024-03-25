// A mock function to mimic making an async request for data
export function fetchGetAssistant() {
    return new Promise((resolve) => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer da0a9e6e-c9a9-45ba-a82b-64e016f9e2f2`,
                'Content-Type': 'application/json',
            },
        };
        fetch('https://api.vapi.ai/assistant', options)
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(err => console.error(err));
    })
}

export function fetchCreateAssistant(payload) {
    return new Promise((resolve) => {
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer da0a9e6e-c9a9-45ba-a82b-64e016f9e2f2`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: {
                    messages: [
                        { role: 'system', content: payload['systemPrompt'] },
                    ],
                    model: 'gpt-3.5-turbo',
                    provider: 'openai',
                },
                firstMessage: payload['firstMessage'],
                name: payload['assistantName']
            }),
        };
        fetch('https://api.vapi.ai/assistant', options)
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(err => console.error(err));
    });
}
