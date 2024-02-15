import React, { useState } from 'react';

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(prevPending => prevPending + 1); // Use functional update to ensure latest state
        await delay(2000); // Reduce delay to 2 seconds
        setPending(prevPending => prevPending - 1); // Decrease pending count based on latest state
        setCompleted(prevCompleted => prevCompleted + 1); // Increment completed count
    }

    return (
        <>
            <h3>
                Pending: {pending}
            </h3>
            <h3>
                Completed: {completed}
            </h3>
            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
