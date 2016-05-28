import request from 'request';

Promise.prototype.done = function() {
  return this.catch((err) => {
    setTimeout(() => {
      throw err;
    }, 0);
  });
};

export function done(asyncFunc) {
  return function() {
    return asyncFunc.apply(this, arguments).done();
  }
}

function httpGet(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, resp, body) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          resp,
          body
        });
      }
    });
  });
}
