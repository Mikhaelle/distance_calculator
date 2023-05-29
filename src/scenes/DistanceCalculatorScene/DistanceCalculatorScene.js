import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const DistanceCalculatorScene = () => {
    const navigate = useNavigate();

    const [sourceAddress, setSourceAddress] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [coordinates, setCoordinates] = useState(null);

    const handleSearch = async () => {
        try {
            const sourceResponse = await fetch(`https://nominatim.openstreetmap.org/search?q=${sourceAddress}&format=json`);
            const sourceData = await sourceResponse.json();
            const destinationResponse = await fetch(`https://nominatim.openstreetmap.org/search?q=${destinationAddress}&format=json`);
            const destinationData = await destinationResponse.json();

            const sourceCoordinates = sourceData.length > 0 ? [sourceData[0].lon, sourceData[0].lat] : null;
            const destinationCoordinates = destinationData.length > 0 ? [destinationData[0].lon, destinationData[0].lat] : null;

            setCoordinates({ source: sourceCoordinates, destination: destinationCoordinates });
        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
    };

    const handleNavigate = () => {
        navigate('/results');
    }

    return (
        <div>
            <input
                type="text"
                value={sourceAddress}
                onChange={(e) => setSourceAddress(e.target.value)}
                placeholder="Source Address"
            />
            <input
                type="text"
                value={destinationAddress}
                onChange={(e) => setDestinationAddress(e.target.value)}
                placeholder="Destination Address"
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleNavigate}>View Results</button>
        </div>
    );
};

