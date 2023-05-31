// create your App component here
import React, { useState, useEffect } from 'react'

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [dog, setDog] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(dogData => {
            setDog(dogData);
            console.log(dogData);
            setIsLoaded(true);
        })
    }, [])
    if (!isLoaded) return <p>Loading...</p>;
    return (
    <div >
        <img src={dog.message} alt={"A Random Dog"}></img>
    </div>
    )
}

export default App