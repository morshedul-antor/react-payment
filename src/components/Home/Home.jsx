export default function Home() {
    const api = 'http://127.0.0.3:8000/api/v1'

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${api}/payment/?user_id=1&service_id=2&amount=200`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    // Authorization: `Bearer ${token}`,
                },
                // body: JSON.stringify(details),
            })

            const log = await response.json()

            if (response.ok) {
                console.log('context', log)
                if (log.result) {
                    window.location.href = log.payment_url
                }
            } else {
                alert(log.context + '!')
            }
        } catch {
            console.log('Please check your internet connection!')
        }
    }

    return (
        <div>
            <div>Payment Gateway</div>
            <button onClick={handleSubmit}>Pay</button>
        </div>
    )
}
