import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {Header} from '../../components/header/Header'
import { DistanceCalculatorPresenter } from "./DistanceCalculatorPresenter";

export const DistanceCalculatorContainer = () => {
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
        <>
            <Header />
            <DistanceCalculatorPresenter
                sourceAddress={sourceAddress}
                setSourceAddress={setSourceAddress}
                destinationAddress={destinationAddress}
                setDestinationAddress={setDestinationAddress}
                handleSearch={handleSearch}
                handleNavigate={handleNavigate}
            />
        </>
    );

};

