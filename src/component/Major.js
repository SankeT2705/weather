import React from "react";
const MajorCity = ({ Mumbai, Chennai, Delhi, Kolkata, Amaravati, Kankavali }) => {
    return (
        <div className="table-responsive">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th style={{ width: '14%' }}></th>
                        <th style={{ width: "14%" }}>Tempeature</th>
                        <th style={{ width: "14%" }}>Feels</th>
                        <th style={{ width: "14%" }}>Max</th>
                        <th style={{ width: "14%" }}>Min</th>
                        <th style={{ width: "14%" }}>Humidity</th>
                        <th style={{ width: "14%" }}>Wind</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="text-start">Mumbai</th>
                        <td>{Mumbai.temp}</td>
                        <td>{Mumbai.feels_like}</td>
                        <td>{Mumbai.max_temp}</td>
                        <td>{Mumbai.min_temp}</td>
                        <td>{Mumbai.humidity}</td>
                        <td>{Mumbai.wind_speed}</td>
                    </tr>
                    <tr>
                        <th className="text-start">Delhi</th>
                        <td>{Delhi.temp}</td>
                        <td>{Delhi.feels_like}</td>
                        <td>{Delhi.max_temp}</td>
                        <td>{Delhi.min_temp}</td>
                        <td>{Delhi.humidity}</td>
                        <td>{Delhi.wind_speed}</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <th className="text-start">Kolkata</th>
                        <td>{Kolkata.temp}</td>
                        <td>{Kolkata.feels_like}</td>
                        <td>{Kolkata.max_temp}</td>
                        <td>{Kolkata.min_temp}</td>
                        <td>{Kolkata.humidity}</td>
                        <td>{Kolkata.wind_speed}</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Chennai</th>
                        <td>{Chennai.temp}</td>
                        <td>{Chennai.feels_like}</td>
                        <td>{Chennai.max_temp}</td>
                        <td>{Chennai.min_temp}</td>
                        <td>{Chennai.humidity}</td>
                        <td>{Chennai.wind_speed}</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Amaravati</th>
                        <td>{Amaravati.temp}</td>
                        <td>{Amaravati.feels_like}</td>
                        <td>{Amaravati.max_temp}</td>
                        <td>{Amaravati.min_temp}</td>
                        <td>{Amaravati.humidity}</td>
                        <td>{Amaravati.wind_speed}</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Kankavali</th>
                        <td>{Kankavali.temp}</td>
                        <td>{Kankavali.feels_like}</td>
                        <td>{Kankavali.max_temp}</td>
                        <td>{Kankavali.min_temp}</td>
                        <td>{Kankavali.humidity}</td>
                        <td>{Kankavali.wind_speed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default MajorCity;