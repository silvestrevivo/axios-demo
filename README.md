# axios-demo
Axios demo built with Bootstrap and Parcel. The goal of this application is to show how to catch different kind of errors with Axios, as alternative to simple __fetch()__ javascript **ES6** method.

## fetch() vs axios()

When you need to catch an error with the _fetch()_ method, if an Network Error occurs, this doesn't become cached. Instead **_Axios_** provides a complete catching system which may be more accurrate using the correct terms in the conditional statemen:

```javascript
axios.get('/user/12345')
  .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // The few sort responses are here collected
    } else if (error.request) {
      // The request was made but no response was received
      // This may occurs if the server falls down or if the URL base is not propery typed
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  });
```

### Conclusion

Since Axios may catch all kind erros, don't use anymore the **fecth()** method. For more information you can visit the documentation from whe GitHub site of [Axios](https://github.com/axios/axios#handling-errors).
