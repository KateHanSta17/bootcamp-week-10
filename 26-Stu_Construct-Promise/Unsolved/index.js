const http = require('http');

// TODO: What does this function return?
// This function returns a promise. The promise represents the eventual completion (or failure) 
// of an asynchronous HTTP request made to the specified URL.
const asyncRequest = (url) =>
  new Promise((resolve, reject) => {
    let error;
    let rawData = '';

    // Use the http.get method to send an asynchronous request to an API at the given URL.
    http
      .get(url, (res) => {
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed HTTP request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume();
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
      })
      .on('error', (e) => {
        // Reject the promise if there's an error during the HTTP request
        reject(e);
      })
      .on('close', () => {
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // TODO: What does the following line do?
          // This line rejects the promise with the error object, which will trigger the `.catch` 
          // method in the promise chain, allowing error handling.
          reject(error);
        } else {
          // TODO: What does the following line do?
          // This line resolves the promise with the raw data received from the server. This data will 
          //be passed to the `.then` method in the promise chain for further processing.
          resolve(rawData);
        }
      });
  });

asyncRequest('http://numbersapi.com/random/trivia')
  // TODO: When is the callback function passed to .then() called by the promise?
  // The callback function passed to `.then()` is called when the promise is successfully resolved. 
  // In this case, it means the HTTP request completed successfully, and the raw data received from the server is available. The data is then logged to the console.
  .then((data) => console.log(data))
  // TODO: When is the callback function passed to .catch() called by the promise?
  // The callback function passed to `.catch()` is called when the promise is rejected. 
  // This happens if there was an error during the HTTP request, such as a non-200 status code or a network error. The error object is then logged to the console.
  .catch((error) => console.log(error));