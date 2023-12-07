function doSomethingAsync(callback) {
    setTimeout(function () {
      console.log("Task is done!");
      callback(); // Call the callback function
    }, 1000);
  }
  
  function onComplete() {
    console.log("Callback function executed.");
  }
  
  doSomethingAsync(onComplete); // Pass onComplete as a callback
  

  

