const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Weather Station Info</h2>
            <ul>
    <li>Time: <strong>{ info.time } </strong></li>
    <li>ID: <strong>{ info.id }</strong></li>
    <li>Temp: <strong>{ info.temperature }</strong></li>
    <li>Humidity: <strong>{ info.humidity }</strong></li>
    <li>Wind Speed: <strong>{ info.wind }</strong></li>
    <li>Wind Direction: <strong>{ info.winddirection }</strong></li>
    <li>Rain: <strong>{ info.rain }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
