import React from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { useState } from 'react';
const App = () => {
    const [temp, settemp] = useState('');
    const [humidity, sethumidity] = useState('');
    const [wind, setwind] = useState('');

    const onSubmitp = async (event) => {
        const response = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
            params: { city: event },
            headers: {
                'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        });
        console.log(response.data)
        settemp(response.data.temp);
        setwind(response.data.wind_speed);
        sethumidity(response.data.humidity);
    }
    return (
        <div>
            <Navbar city={onSubmitp} />
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Tempeature</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">{temp}<small className="text-muted fw-light"> degree</small></h1>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Wind</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">{wind}<small className="text-muted fw-light"> km/hr</small></h1>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm  ">
                        <div className="card-header py-3  ">
                            <h4 className="my-0 fw-normal">Humidity</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">{humidity}<small className="text-muted fw-light"> %</small></h1>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;