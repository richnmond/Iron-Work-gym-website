'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useMemo } from 'react'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 40.7128, // Your gym's latitude
  lng: -74.0060 // Your gym's longitude
}

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export default function GymMap() {
  const markerIcon = useMemo(() => {
    return undefined // Use default marker
  }, [])

  if (!GOOGLE_MAPS_API_KEY) {
    return (
      <div className="h-[400px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-700 font-semibold mb-2">📍 IronWorks Gym</p>
          <p className="text-gray-600 text-sm mb-1">123 Fitness Street</p>
          <p className="text-gray-600 text-sm mb-4">Gym City, 10001</p>
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-red-600 font-medium text-sm hover:underline"
          >
            Get Directions →
          </a>
          <p className="text-gray-500 text-xs mt-4">
            (Configure NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable map)
          </p>
        </div>
      </div>
    )
  }

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options={{
          styles: [
            {
              "featureType": "poi.business",
              "stylers": [{ "visibility": "off" }]
            }
          ],
          disableDefaultUI: false,
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: false,
          fullscreenControl: true
        }}
      >
        <Marker 
          position={center}
          title="IronWorks Gym"
        />
      </GoogleMap>
    </LoadScript>
  )
}