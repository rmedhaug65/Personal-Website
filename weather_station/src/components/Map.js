import { useState } from 'react'
import LocationMarker from './LocationMarker'
import GoogleMapReact from 'google-map-react'
import { isCompositeComponentWithType, mockComponent } from 'react-dom/test-utils'
import LocationInfoBox from './LocationInfoBox'

const Dap = ({ eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData.map(ev => {
        // const newdate = new Date()
        // const olddate = new Date(ev.logtime)
        // const diff = Math.abs(newdate - olddate) / (1000 * 60);
        return <LocationMarker lat={parseFloat(ev.latitude)} lng={parseFloat(ev.longitude)} 
        onClick={() => setLocationInfo({ time: ev.logtime+String(' UTC') , id: ev.id, temperature: ev.temperature+String(' F'), humidity: ev.humidity+String('%'), wind: ev.wind, winddirection: ev.winddirection, rain: ev.rain})} />
    })  

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GoogleMapAPIKey }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Dap.defaultProps = {
    center: {
        lat: 44.97974,
        lng: -93.26901
    },
    zoom: 14
}

export default Dap
