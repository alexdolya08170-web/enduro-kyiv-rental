// LocationFinder.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './LocationFinder.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LocationFinder = () => {
  const position = [50.371, 30.510];
  
  const handleBuildRoute = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`, '_blank');
  };

  return (
    <section className="location-finder">
      <div className="location-finder__container">
        <div className="location-finder__map-wrapper">
          <MapContainer 
            center={position} 
            zoom={15} 
            className="location-finder__map"
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Ми тут!</Popup>
            </Marker>
          </MapContainer>
          
          <button 
            className="location-finder__route-button"
            onClick={handleBuildRoute}
            aria-label="Прокласти маршрут до нас"
          >
            <span className="location-finder__button-icon">📍</span>
            Прокласти маршрут
          </button>
        </div>

        <div className="location-finder__info">
          <h2 className="location-finder__title">Як нас знайти?</h2>
          
          <address className="location-finder__address">
            <p className="location-finder__landmark">
              Орієнтир — з'їзд одразу після заправки <strong className="location-finder__highlight">OKKO</strong>
            </p>
          </address>

          <div className="location-finder__directions">
            <p className="location-finder__direction-text">
              Після з'їзду рухайтеся головною дорогою — наша команда зустріне вас.
            </p>
          </div>

          <div className="location-finder__arrival">
            <p className="location-finder__arrival-title">По прибуттю ми:</p>
            <ul className="location-finder__list">
              <li className="location-finder__list-item">
                Покажемо, де можна безпечно залишити автомобіль
              </li>
              <li className="location-finder__list-item">
                Надамо всі подальші вказівки перед виїздом
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFinder;