const url1 = `https://haryanacms.onrender.com`;

// Get data

const getRange = async () => {
  let res = await fetch(`${url1}/range/getRange`);
  res = await res.json();
//   console.log(res);
  appendRange(res);
};

// district
const getDistrict = async () => {
  let res = await fetch(`${url1}/district/getDistrict`);
  res = await res.json();
//   console.log(res);
  appendDistrict(res);
};

// append data

const appendRange = (data) => {
  let container = document.getElementById("ranges");
  let UpdateCont = document.getElementById("UpdateRanges")

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = el.rangeName;
    option.value = el.rangeName;
    // console.log(option)
    container.append(option);
    UpdateCont.append(option)
  });
};

const appendDistrict = (data) => {
  let container = document.getElementById("district");
  let updateCont = document.getElementById("updateDistrict")

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = el.rangeDistrictName;
    option.value = el.rangeDistrictName;
    // console.log(option)
    container.append(option);
    updateCont.append(option)
  });
};

// function calls

getRange();
getDistrict();
