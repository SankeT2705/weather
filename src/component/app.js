import React from 'react';
import axios from 'axios';
import Navbar from './navbar';
import MajorCity from './Major';
import { useState, useEffect } from 'react';
const App = () => {

    const [temp, settemp] = useState('');
    const [humidity, sethumidity] = useState('');
    const [wind, setwind] = useState('');
    const [Mumbai, setMumbai] = useState('');
    const [Delhi, setDelhi] = useState('');
    const [Chennai, setChennai] = useState('');
    const [Kolkata, setKolkata] = useState('');
    const [Amaravati, setAmaravati] = useState('');
    const [Kankavali, setKankavali] = useState('');
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

    // const setMajorInfo = async () => {
    //     const response1 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
    //         params: { city: "mumbai" },
    //         headers: {
    //             'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
    //             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    //         }
    //     });
    //     setMumbai(response1.data)

    //     const response2 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
    //         params: { city: "delhi" },
    //         headers: {
    //             'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
    //             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    //         }
    //     });
    //     setDelhi(response2.data)
    //     const response3 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
    //         params: { city: "chennai" },
    //         headers: {
    //             'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
    //             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    //         }
    //     });
    //     setChennai(response3.data)
    //     const response4 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
    //         params: { city: "kolkata" },
    //         headers: {
    //             'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
    //             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    //         }
    //     });
    //     setKolkata(response4.data)

    //     const response5 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
    //         params: { city: "amaravati" },
    //         headers: {
    //             'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
    //             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    //         }
    //     });
    //     setAmaravati(response5.data)
    //     const response6 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
    //         params: { city: "kankavali" },
    //         headers: {
    //             'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
    //             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    //         }
    //     });
    //     setKankavali(response6.data)


    // }
    useEffect(async () => {
        const response1 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
            params: { city: "mumbai" },
            headers: {
                'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        });
        setMumbai(response1.data)

        const response2 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
            params: { city: "delhi" },
            headers: {
                'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        });
        setDelhi(response2.data)
        const response3 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
            params: { city: "chennai" },
            headers: {
                'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        });
        setChennai(response3.data)
        const response4 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
            params: { city: "kolkata" },
            headers: {
                'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        });
        setKolkata(response4.data)

        const response5 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
            params: { city: "amaravati" },
            headers: {
                'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        });
        setAmaravati(response5.data)
        const response6 = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
            params: { city: "kankavali" },
            headers: {
                'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        });
        setKankavali(response6.data)
    }, [])

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

            <MajorCity Mumbai={Mumbai} Chennai={Chennai} Delhi={Delhi} Kolkata={Kolkata} Amaravati={Amaravati} Kankavali={Kankavali} />
        </div>
    )
}
export default App;