const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';


class Promise {
  constructor (executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      console.log('resolve---', value)
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
      }
    }
    const reject = (reason) => {
      console.log('reject----', reason, this.status);
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
      }
    }
  
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }

}

module.exports = Promise;