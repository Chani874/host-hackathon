import React, { useState, useEffect, useCallback } from 'react';

const DistanceTracker = () => {
    const [distance, setDistance] = useState(null);
    const [error, setError] = useState(null);

    const fetchDistance = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:5000/api/distance');
            const data = await response.json();
            
            if (data.status === 'ok') {
                setDistance(data.distance);
                setError(null);
            } else {
                setError(data.message || 'Unable to measure distance');
            }
        } catch (err) {
            setError('Failed to connect to server');
        }
    }, []);

    useEffect(() => {
        fetchDistance(); // Initial fetch
        const intervalId = setInterval(fetchDistance, 50); // Poll every 50ms
        return () => clearInterval(intervalId);
    }, [fetchDistance]);

    const getColor = () => {
        if (distance === null) return { outer: 'gray', inner: 'white' };
        if (distance < 0.8) return { outer: '#4449CC', inner: '#1A1E85' };
        if (distance <= 1.1) return { outer: '#FF8B59', inner: '#EA641C' };
        return { outer: '#F64949', inner: '#AA0000' };
    };

    const colors = getColor();

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            width: '200px',
            zIndex: 1000,
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
            {/* <h3 style={{ textAlign: 'center', margin: '0 0 10px 0' }}>
                Distance Tracker
            </h3> */}
            <div style={{
                width: '150px',
                height: '150px',
                margin: '0 auto',
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: '50%',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: '0',
                    borderRadius: '50%',
                    border: `15px solid ${colors.outer}`,
                    backgroundColor: colors.inner,
                    transition: 'all 0.05s linear'
                }} />
                <div style={{
                    position: 'absolute',
                    inset: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold'
                }}>
                    {error ? 'Error' : distance ? distance.toFixed(2) : '--'}
                </div>
            </div>
            {distance > 1 && (
                <div style={{
                    marginTop: '10px',
                    textAlign: 'center',
                    color: 'blue',
                    fontSize: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '5px',
                    borderRadius: '4px'
                }}>
                    מרחק חריג
                </div>
            )}
        </div>
    );
};

export default DistanceTracker;