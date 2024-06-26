export function fetchhandleCallOutBound(payload) {
    return new Promise((resolve) => {
        console.log(payload)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                assistantId: payload['selectedOutBoundAssistant'],
                phoneNumberId: payload['selectedOutBoundPhone'],
                customer: { number: payload['outboundPhoneNumber'] }
            })
        }
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/phone/call-outbound`, options)
            .then(response => response.json())
            .then(response => resolve(response.data))
            .catch(err => console.error(err));
    })
}

export function fetchloadAssistantPhone() {
    return new Promise((resolve) => {
        const options = { method: 'GET', headers: { Authorization: 'Bearer da0a9e6e-c9a9-45ba-a82b-64e016f9e2f2' } };

        fetch('https://api.vapi.ai/phone-number', options)
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(err => console.error(err));
    })
}

export function fetchSetAssistant(payload) {
    return new Promise((resolve) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                assistant: payload['select'],
                phone: payload['Phone']
            })
        }
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/phone/in-bound`, options)
            .then(response => response.json())
            .then(response => resolve(response.data))
            .catch(err => console.error(err));
    })
}

export function fetchGetPhone(payload) {
    return new Promise((resolve) => {
        console.log(payload)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                CN: payload['selectedCountry']
            })
        }
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/phone/get-phone`, options)
            .then(response => response.json())
            .then(response => resolve(response.data))
            .catch(err => console.error(err));
    });
}

export function fetchBuyPhone(payload) {
    return new Promise((resolve) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Number: payload
            })
        }
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/phone/buy-phone`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .then(response => resolve(response.data))
            .catch(err => console.error(err));
    })
}