function myAsyncFunction() {
  let promise = new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      console.log('working asynchronously');
      if (error) {
        reject('Error');
      } else {
        resolve('Done');
      }
    }, 1000);
  });

  return promise;
}

// myAsyncFunction().then(
//   (success) => console.log(success),
//   (error) => console.log(error)
// );

myAsyncFunction().then(
  (success) => console.log(success)
  .catch((error) => console.log(error))
);