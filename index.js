// Define myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
  }
  
  // Define myMap function
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (element) => {
      result.push(callback(element));
    });
    return result;
  }
  
  // Define myReduce function
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }
    return accumulator;
  }
  
  // Define myFind function
  function myFind(collection, callback) {
    for (const element of collection) {
      if (callback(element)) {
        return element;
      }
    }
    return undefined;
  }
  
  // Define myFilter function
  function myFilter(collection, callback) {
    const result = [];
    myEach(collection, (element) => {
      if (callback(element)) {
        result.push(element);
      }
    });
    return result;
  }
  
  // Define mySize function
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Define myFirst function
  function myFirst(collection, n = 1) {
    return collection.slice(0, n);
  }
  
  // Define myLast function
  function myLast(collection, n = 1) {
    return collection.slice(-n);
  }
  
  // Define myKeys function
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  // Define myValues function
  function myValues(collection) {
    return Object.values(collection);
  }
  