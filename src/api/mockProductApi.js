import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
    {
        id: "1",
        name: "Testproduct1"
    },
    {
        id: "2",
        name: "Testproduct2"
    }
];

class CourseApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }
}

export default CourseApi;