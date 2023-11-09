function myAsyncFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('working asynchronously');
      resolve();
    }, 1000);
  });

  return promise;
}