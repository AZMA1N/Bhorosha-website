import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { GlassCard } from '../ui/GlassCard';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ActiveProjectsMap = () => {
    // Mock data for active projects (Bangladesh coordinates)
    const projects = [
        { id: 1, name: "Savar Model Farm", lat: 23.8483, lng: 90.2674, crop: "Potato" },
        { id: 2, name: "Gazipur Orchard", lat: 24.0958, lng: 90.4125, crop: "Mango" },
        { id: 3, name: "Comilla Rice Field", lat: 23.4607, lng: 91.1809, crop: "Rice" }
    ];

    return (
        <GlassCard className="h-[400px] relative overflow-hidden z-0">
            <h3 className="text-xl font-bold text-forest-green mb-4 absolute top-6 left-6 z-[400] bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                Active Projects
            </h3>
            <MapContainer
                center={[23.8103, 90.4125]}
                zoom={7}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {projects.map((project) => (
                    <Marker key={project.id} position={[project.lat, project.lng]}>
                        <Popup>
                            <div className="text-center">
                                <h4 className="font-bold text-forest-green">{project.name}</h4>
                                <p className="text-sm text-gray-600">Crop: {project.crop}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </GlassCard>
    );
};

export default ActiveProjectsMap;
