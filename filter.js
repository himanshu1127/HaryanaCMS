
const url1 = `https://haryanacms.onrender.com`;

// Get data

const getRange = async () => {
  let res = await fetch(`${url1}/range/getRange`);
  res = await res.json();
  // console.log(res);
  appendRange(res);
};

const getDistrict = async () => {
  let res = await fetch(`${url1}/district/getDistrict`);
  res = await res.json();
  // console.log(res);
  appendDistrict(res);
};
const getStation = async () => {
  let res = await fetch(`${url1}/policestation/getPolicestation`);
  res = await res.json();
  // console.log(res);
  appendStation(res);
};

const getAllSp =async()=>{
  let res = await fetch(`${url1}/user/allsp`);
  res = await res.json();
  // console.log(res);
  appendSp(res);
}
// End Get Data

// Append Data
const appendRange = (data) => {
  let container = document.getElementById("rangesFilter");
  let rangeInput = document.getElementById("rangeInput")
  
  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = el.rangeName;
    option.value = el.rangeName;
    // console.log(option)
    container.append(option);
    rangeInput.append(option)
    // console.log(rangeInputUpdate1)
    // console.log(rangeInput)
  });
};
const appendDistrict = (data) => {
  let container = document.getElementById("districtFilter");

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = el.rangeDistrictName;
    option.value = el.rangeDistrictName;
    // console.log(option)
    container.append(option);
  });
};

const appendStation = (data) => {
  let container = document.getElementById("stationFilter");

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = el.policeStationName;
    option.value = el.policeStationName;
    // console.log(option)
    container.append(option);
  });
};
const appendSp = (data) => {
  let SPName = document.getElementById("SPName");

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = `${el.fname} ${el.lname}`;
    option.value = el.email;
    // console.log(option)
    SPName.append(option);
  });
};
// Function Calls

getRange();
getDistrict()
getStation()
getAllSp()