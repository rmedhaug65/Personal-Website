import { useState } from 'react'
import LocationMarker from './LocationMarker'
import GoogleMapReact from 'google-map-react'
import { isCompositeComponentWithType, mockComponent } from 'react-dom/test-utils'
import LocationInfoBox from './LocationInfoBox'
import moment from 'moment'
import SearchBox from './SearchBox'

const Dap = ({ eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData.map(ev => {
        const timezone = moment.duration("05:00:00")
        const olddate = moment(ev.logtime)
        const olderdate = olddate.subtract(timezone)
        const newdate = olderdate.format('YYYY-MM-DD[T]HH:mm:ss')
        const current = moment(newdate).startOf('minute').fromNow()
        return <LocationMarker lat={parseFloat(ev.latitude)} lng={parseFloat(ev.longitude)} 
        onClick={() => setLocationInfo({ time: current, id: ev.id, temperature: Number(ev.temperature).toFixed(1)+String(' F'), humidity: Number(ev.humidity).toFixed(1)+String('%'), wind: Number(ev.wind).toFixed(1)+String(' mph'), winddirection: ev.winddirection, rain: Number(ev.rain).toFixed(1)+'\"'})} />
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GoogleMapAPIKey }}
                defaultCenter={ center }
                defaultZoom={ zoom }
                options={function(maps) { return { mapTypeId: "hybrid", gestureHandling:"greedy" }}}
            >
                {markers}
                {SearchBox}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Dap.defaultProps = {
    center: {
        lat: 45.8320,
        lng: -97.2625
    },
    zoom: 15
}



export default Dap
