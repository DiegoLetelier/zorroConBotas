import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const Info = () => {

    const position = [-38.41, -71.57]

    return (
        <div>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>Nuestra Ubicación</p>
            <MapContainer center={[-38.41, -71.57]} zoom={10} scrollWheelZoom={false} style={{height : '200px'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Marker position={position}></Marker>
            </MapContainer>

        </div>
    )

}

export default Info