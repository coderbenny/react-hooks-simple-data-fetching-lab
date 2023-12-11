import React, { useState, useEffect } from "react"

// create your App component here
function App() {

    // State for API Data
    const [dogData, setDogData] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    // useEffect Hook for fetching Image
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setDogData(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return (<p>Loading...</p>)
    }

    return (
        <img src={dogData.message} alt="A Random Dog" />
    )
}


export default App;