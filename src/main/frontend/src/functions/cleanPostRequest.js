export function cleanService(serviceChoice) {
  let service;

  if (serviceChoice === 2) {
    service = "Topp Städning";
  } else if (serviceChoice === 3) {
    service = "Diamant Städning";
  } else if (serviceChoice === 4) {
    service = "Fönstertvätt";
  } else {
    service = "Basic Städning";
  }

  return service;
}

export function cleanDate(dateTime) {
  let date;
  dateTimeCheck(dateTime);

  return date;
}

export function cleanTime(dateTime) {
  let time;
  dateTimeCheck(dateTime);

  dateTime.split("T");

  console.log(dateTime);

  return time;
}

function dateTimeCheck(dateTime) {
  if (!dateTime.startsWith("2")) {
    dateTime = getCurrentDate();
  } else {
    dateTime = dateTime;
  }

  return dateTime;
}

export function getCurrentDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();

  return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  }T${hour < 10 ? `0${hour}` : `${hour}`}:${
    minute < 10 ? `0${minute}` : `${minute}`
  }`;
}
