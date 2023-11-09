function myAsyncFunction() {
  let promise = new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      console.log('working asynchronously');
      if (error) {
        reject();
      } else {
        resolve();
      }
    }, 1000);
  });

  return promise;
}

myAsyncFunction().then(
  () => console.log('Work Done'),
  () => console.log('Error')
);