//  import React, { useState } from 'react'

//  export default function Zip() {
// // var state = this.getField("State").value;
// if (zip != "") {
//     // if zip = event.value;
//     var dataTable = [["AK",99501,99950], ["AL",35004,36925],
//      ["AR",71601,72959], ["AR",75502,75502], ["AZ",85001,86556], ["CA",90001,96162],
//      ["CO",80001,81658], ["CT",6001,6389], ["CT",6401,6928], ["DC",20001,20039],
//       ["DC",20042,20599], ["DC",20799,20799], ["DE",19701,19980], ["FL",32004,34997],
//       ["GA",30001,31999], ["GA",39901,39901], ["HI",96701,96898], ["IA",50001,52809], ["IA",68119,68120],
//       ["ID",83201,83876], ["IL",60001,62999], ["IN",46001,47997], ["KS",66002,67954], ["KY",40003,42788],
//       ["LA",70001,71232], ["LA",71234,71497], ["MA",1001,2791], ["MA",5501,5544], ["MD",20331,20331],
//       ["MD",20335,20797], ["MD",20812,21930], ["ME",3901,4992], ["MI",48001,49971], ["MN",55001,56763],
//       ["MS",38601,39776], ["MS",71233,71233], ["MT",59001,59937], ["NC",27006,28909], ["ND",58001,58856],
//       ["NE",68001,68118], ["NE",68122,69367], ["NH",3031,3897], ["NJ",7001,8989], ["NM",87001,88441], ["NV",88901,89883], ["NY",6390,6390], ["NY",10001,14975], ["OH",43001,45999], ["OK",73001,73199], ["OK",73401,74966], ["OR",97001,97920], ["PA",15001,19640], ["RI",2801,2940], ["SC",29001,29948], ["SD",57001,57799], ["TN",37010,38589], ["TX",73301,73301], ["TX",75001,75501], ["TX",75503,79999], ["TX",88510,88589], ["UT",84001,84784], ["VA",20040,20041], ["VA",20040,20167], ["VA",20042,20042], ["VA",22001,24658], ["VT",5001,5495], ["VT",5601,5907], ["WA",98001,99403], ["WI",53001,54990], ["WV",24701,26886], ["WY",82001,83128]];
//     var valid = false;
//     dataTable.forEach(validate);
//     function validate(item, index) {
//     if(item[0]==state)
//     {
//     if(zip>=item[1] && zip<=item[2])
//     {
//     valid = true;
//     }
//     }
//     }
//     if(!valid)
//     {
//     app.alert({cMsg:"This is not a valid Zip Code ("+zip+") for "+state+".",nIcon: 0, nType: 1,cTitle:"Invalid Input"});
//     event.value = "";
//     }
//     }
//     const [ZipCode, setZipCode] = useState()
//    return (
//      <div>Zip</div>
//    )
//  }

// // this.getField("Zip").value = ""

var state = this.getField("State").value;
var zip = event.value;
if (zip != "") {
  var dataTable = [
    ["Alaska", 99501, 99950],
    ["Alabama", 35004, 36925],
    ["Arkansas", 71601, 72959],
    ["Arkansas", 75502, 75502],
    ["Arizona", 85001, 86556],
    ["California", 90001, 96162],
    ["Colorado", 80001, 81658],
    ["Connecticut", 6001, 6389],
    ["Connecticut", 6401, 6928],
    ["Columbia", 20001, 20039],
    ["Columbia", 20042, 20599],
    ["Columbia", 20799, 20799],
    ["Delaware", 19701, 19980],
    ["Florida", 32004, 34997],
    ["Georgia", 30001, 31999],
    ["Georgia", 39901, 39901],
    ["Hawaii", 96701, 96898],
    ["Iowa", 50001, 52809],
    ["Iowa", 68119, 68120],
    ["Idaho", 83201, 83876],
    ["Illinois", 60001, 62999],
    ["Indiana", 46001, 47997],
    ["Kansas", 66002, 67954],
    ["Kentucky", 40003, 42788],
    ["Louisiana", 70001, 71232],
    ["Louisiana", 71234, 71497],
    ["MA", 1001, 2791],
    ["Massachusetts", 5501, 5544],
    ["Maryland", 20331, 20331],
    ["Maryland", 20335, 20797],
    ["Maryland", 20812, 21930],
    ["Maine", 3901, 4992],
    ["Michigan", 48001, 49971],
    ["Minnesota", 55001, 56763],
    ["Mississippi", 38601, 39776],
    ["Mississippi", 71233, 71233],
    ["Missouri", 63010, 63188],
    ["Montana", 59001, 59937],
    ["North Carolina", 27006, 28909],
    ["North Dakota", 58001, 58856],
    ["Nebraska", 68001, 68118],
    ["Nebraska", 68122, 69367],
    ["New Hampshire", 3031, 3897],
    ["New Jersey", 7001, 8989],
    ["New Mexico", 87001, 88441],
    ["Nevada", 88901, 89883],
    ["New York", 6390, 6390],
    ["New York", 10001, 14975],
    ["Ohio", 43001, 45999],
    ["Oklahoma", 73001, 73199],
    ["Oklahoma", 73401, 74966],
    ["Oregon", 97001, 97920],
    ["Pennsylvania", 15001, 19640],
    ["Rhode Island", 2801, 2940],
    ["South Carolina", 29001, 29948],
    ["South Dakota", 57001, 57799],
    ["Tennessee", 37010, 38589],
    ["Texas", 73301, 73301],
    ["Texas", 75001, 75501],
    ["Texas", 75503, 79999],
    ["Texas", 88510, 88589],
    ["Utah", 84001, 84784],
    ["Virginia", 20040, 20041],
    ["Virginia", 20040, 20167],
    ["Virginia", 20042, 20042],
    ["Virginia", 22001, 24658],
    ["Vermont", 5001, 5495],
    ["Vermont", 5601, 5907],
    ["Washington", 98001, 99403],
    ["Wisconsin", 53001, 54990],
    ["West Virginia", 24701, 26886],
    ["Wyoming", 82001, 83128],
  ];
  var valid = false;
  dataTable.forEach(validate);
  function validate(item, index) {
    if (item[0] == state) {
      if (zip >= item[1] && zip <= item[2]) {
        valid = true;
      }
    }
  }
  if (!valid) {
    app.alert({
      cMsg: "This is not a valid Zip Code (" + zip + ") for " + state + ".",
      nIcon: 0,
      nType: 1,
      cTitle: "Invalid Input",
    });
    event.value = "";
  }
}

this.getField("Zip").value = "";
