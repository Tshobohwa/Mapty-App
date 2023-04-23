'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// getting the current position and loging it lo the console in a google map link
navigator.geolocation.getCurrentPosition(
  pos => {
    const { longitude, latitude } = pos.coords;
    console.log(longitude, latitude);
    const googleMapsUrl = `https://www.google.com/maps/@${latitude},${longitude}z`;
    console.log(googleMapsUrl);
    const map = L.map('map').setView([latitude, longitude], 13);

    console.log(L);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  },
  () => {
    alert('could not get your position');
  }
);
