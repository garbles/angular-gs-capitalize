# angular-gs-capitalize

[![Build Status](https://secure.travis-ci.org/garbles/angular-gs-capitalize.png?branch=master)](https://travis-ci.org/garbles/angular-gs-capitalize)

Capitalizes strings

### Installing

`bower install angular-gs-capitalize`

### Using

Include the package in your application:

```javascript
angular.module('app', ['gs.capitalize']);
```

Inject the `capitalize` service into your application and pass in a string to use

```javascript
app.controller(function (capitalize) {
  capitalize('gabe') // => Gabe
});
