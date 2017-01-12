var _ = require('underscore');

var a = [{
    "fruit": "banana",
    "phone": "+1 (832) 495-3545",
    "company": "creatiosoft",
    "name": {
      "last": "Woodward",
      "first": "Delacruz"
    },
    "age": 31,
    "salary": 7600905
  },
  {
    "fruit": "banana",
    "phone": "+1 (961) 552-2908",
    "company": "accenture",
    "name": {
      "last": "Francis",
      "first": "Hickman"
    },
    "age": 40,
    "salary": 2763040
  },
 	];

  //console.log(_.where(a,123));

 var isObject = require('./utility/isObject');

 console.log(isObject(a));

 console.log(_.where("sdfsdfsd",32));