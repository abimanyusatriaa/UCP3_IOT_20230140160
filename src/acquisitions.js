import Chart from 'chart.js/auto';
import sensorDataJson from './datasensoroneloc.json';

const sensorData =
  sensorDataJson.datasensorreport[0].sensordata;

const labels = sensorData.map(item => item.timestamp);

const temperatures = sensorData.map(item => item.temperature);

const humidities = sensorData.map(item => item.humidity);

const pressures = sensorData.map(item => item.pressure);


// ======================
// TEMPERATURE CHART
// ======================

new Chart(
  document.getElementById('temperatureChart'),
  {
    type: 'line',

    data: {
      labels: labels,

      datasets: [{
        label: 'Temperature',
        data: temperatures,
        borderWidth: 2
      }]
    }
  }
);


// ======================
// HUMIDITY CHART
// ======================

new Chart(
  document.getElementById('humidityChart'),
  {
    type: 'line',

    data: {
      labels: labels,

      datasets: [{
        label: 'Humidity',
        data: humidities,
        borderWidth: 2
      }]
    }
  }
);


// ======================
// PRESSURE CHART
// ======================

new Chart(
  document.getElementById('pressureChart'),
  {
    type: 'line',

    data: {
      labels: labels,

      datasets: [{
        label: 'Pressure',
        data: pressures,
        borderWidth: 2
      }]
    }
  }
);