const url = `https://haryanacms.onrender.com`;

const getRange = async () => {
  let res = await fetch(`${url}/range/getRange`);
  res = await res.json();
  // console.log(res);
  appendRange(res);
};
getRange();
const getDistrict = async () => {
  let res = await fetch(`${url}/district/getDistrict`);
  res = await res.json();
  // console.log(res);
  appendDistrict(res);
};
getDistrict();
const appendRange = (data) => {
  let container = document.getElementById("ranges");

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = el.rangeName;
    option.value = el.rangeName;
    // console.log(option)
    container.append(option);
  });
};
const appendDistrict = (data) => {
  let container = document.getElementById("districts");

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = el.rangeDistrictName;
    option.value = el.rangeDistrictName;
    // console.log(option)
    container.append(option);
  });
};

const getPoliceStation = async () => {
  let res = await fetch(`${url}/policestation/getPolicestation`);
  res = await res.json();
  console.log(res);
  appendtable(res);
};
getPoliceStation();
const addPoliceStation = async () => {
  let stationInput = document.getElementById("policeStationInput").value;
  stationInput = stationInput.toUpperCase();
  let status = false;
  if (document.getElementById("status").value === "ON") {
    status = true;
  } else {
    status = false;
  }
  let obj = {
    policeStationName: stationInput,
    phoneNumber: document.getElementById("phoneInput").value,
    policeStationDistrict: document.getElementById("districts").value,
    email: document.getElementById("emailInput").value,
    policeStationRange: document.getElementById("ranges").value,
    Status: status,
  };
  obj = JSON.stringify(obj);
  console.log(obj);

  try {
    let res = await fetch(`${url}/policestation/addPolicestation`, {
      method: "POST",
      body: obj,
      headers: {
        "Content-type": "application/json",
      },
    });
    res = await res.json();
    console.log(res);
    if (res.status === 501) {
      alert("Police Station Already Present");
    } else if (res.status === 200) {
      alert("Police Station Added Successfuly!");
    }
    document.getElementById("ranges").value = "";
    document.getElementById("districts").value = "";
    document.getElementById("policeStationInput").value = "";
    document.getElementById("phoneInput").value = "";
    email: document.getElementById("emailInput").value = "";
    status: document.getElementById("status").value = "OFF";
    getPoliceStation();
  } catch (err) {
    console.log(err);
  }
};

let appendtable = (data) => {
  let container = document.getElementById("tbody");
  container.innerHTML = null;
  let i = 0;
  data.map((el) => {
    i++;
    // console.log(el);

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td1.innerText = i;
    td2.innerHTML = el.policeStationName;
    td3.innerText = el.policeStationDistrict;
    td4.innerText = el.policeStationRange;

    tr.append(td1, td2, td3, td4);

    container.append(tr);
  });
};
