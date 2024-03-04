import React, { useState, useEffect } from 'react';
import axios from 'axios'
const IPAddressComponent = () => {
    const [ipAddress, setIPAddress] = useState('');
    const [values, setValues] = useState({
        latitude: "",
        longitude: ""
      });
   async function positiongetter(ipAddress)
    {
        let result=await axios.get(`https://apiip.net/api/check?ip=${ipAddress}&accessKey=7272b948-ad99-4714-ac75-4556f3a3b6fd`);
        console.log(result.data.latitude);
        console.log(result.data.longitude);
        setValues({
            latitude:result.data.latitude,
            longitude:result.data.longitude
        });
        console.log(values);
    }

    useEffect(() => {
        const fetchIPAddress = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setIPAddress(data.ip);
                
            } catch (error) {
                console.error('Error fetching IP address:', error);
            }
        };

        fetchIPAddress();
    }, []);

    return (
        <div>
            {/* Displaying IP address on screen */}
            <p>IP Address: {ipAddress}</p>
            <button onClick={()=>{
                positiongetter(ipAddress);
            }}>Click me</button>
            <p>longitude:{values.latitude}</p>
            <p>latitude:{values.longitude}</p>
        </div>
    );
};

export default IPAddressComponent;
