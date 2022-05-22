import React from 'react';
import {loadLocations} from './utils.js';

import LocationCarousel from '../components/LocationCarousel';
import Map from '../components/Map';

const locations = [{lat: 30.7092898, long: 76.7775284}, {lat: 30.7511328, long: 76.7786236}, {lat: 30.7604584, long: 76.7732003}, {lat: 30.6997324, long: 76.7375841}]
const LocationPageContainer = () => {
  const mapLoad = map => {
    setTimeout(() => {
      window.map = map;
      loadLocations(map, locations);
    }, 2000);
  };

  const carouselChange = (from, to) => {
    console.log(to);
    console.log(locations[to]);
    window.map.flyTo({
      center: [
        locations[to].long,
        locations[to].lat,
      ],
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
      })
    }

  return (
    <div className="location-page">
      <div className="location-container">
        <h1>Local Doctors</h1>
        <h3>Please enable location sharing on your browser</h3>
      <LocationCarousel
      beforeChange={carouselChange}
      information={[
        { name:'GMCH 32', 
          occupation: 'doctor', // Type of doctor
          lat: 30.7092898,
          'location-img': 'https://d279m997dpfwgl.cloudfront.net/wp/2020/06/doctor-office.jpg',
          long: 76.7775284,
          address: ' Chandi Path, Sector 32B, 32B, Sector 32, Chandigarh, 160047',
          'phone-num': '0172 260 1023',
          'office-hours': '9:00AM - 5:00PM',
          website:'https://http://gmch.gov.in/'
      },
       { name:'GMSH 16', 
         occupation: 'doctor', // Type of doctor
         lat: 32.7256001,
         'location-img': 'https://scopeblog.stanford.edu/wp-content/uploads/2020/06/doctors-office-1944117-scaled-e1591229685470-1152x578.jpg',
         long: -117.1616203,
         address: 'Madhya Marg, Sector 16 A, Sector 16, Chandigarh, 160015', // Address of doctor office
         'phone-num': '0172 260 1023',
         'office-hours': '9:00AM - 5:00PM',
         website:'https://http://gmsh.gov.in/'
      },
          { name: 'PGI Hospital, Chandigarh', 
          occupation: 'doctor', // Type of doctor
          lat: 32.7256001,
          'location-img': 'https://media.pri.org/s3fs-public/styles/story_main/public/story/images/25065081582_6d669759be_o.jpg?itok=POvhiOww',
          long: -117.1616203,
          address: 'PGIMER, Madhya Marg, Sector 12, Chandigarh, 160012', // Address of doctor office
          'phone-num': '172-2747585',
          'office-hours': '9:00AM - 1:00PM',
          website:'https://pgimer.edu.in/'
      }
    ]}
    />
    </div>
  <Map mapLoad={mapLoad} />
  </div>
  )
}

export default LocationPageContainer;
