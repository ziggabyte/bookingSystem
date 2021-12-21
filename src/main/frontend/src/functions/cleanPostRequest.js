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
