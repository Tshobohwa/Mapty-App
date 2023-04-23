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
  },
  () => {
    alert('could not get your position');
  }
);
