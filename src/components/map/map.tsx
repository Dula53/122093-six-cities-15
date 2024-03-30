import {useRef, useEffect} from 'react';
import {LayerGroup, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import { City } from '../../types/city';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { offersSelectors } from '../../store/slices/offers';
import { currentCustomIcon, defaultCustomIcon } from './const';

type MapProps = {
  currentLocation: City;
  currentOffers: Offer[] | null;
  className?: string;
  offerDetailId?: string;
};

function Map({currentLocation, currentOffers, className, offerDetailId}: MapProps): JSX.Element {
  const activeOfferState = useAppSelector(offersSelectors.activeOfferId);
  const activeOffer = offerDetailId ?? activeOfferState;
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentLocation);
  const markerLayer = useRef<LayerGroup>(layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([currentLocation.location.latitude, currentLocation.location.longitude], currentLocation.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [currentLocation, map]);

  useEffect(() => {
    if (map) {
      currentOffers?.forEach((currentOffer) => {
        const marker = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude
        });

        marker
          .setIcon(
            activeOffer !== undefined && currentOffer.id === activeOffer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer.current);
      });
    }
  }, [map, currentOffers, activeOffer]);

  return <section className={`map ${className}`} ref={mapRef} />;
}

export default Map;
