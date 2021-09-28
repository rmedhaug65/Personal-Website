import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/thermometer'

const LocationMarker = ({ latitude, longitude, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker
