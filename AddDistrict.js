const url = `https://haryanacms.onrender.com`;

const getRange = async () => {
  let res = await fetch(`${url}/range/getRange`);
  res = await res.json();
  //   console.log(res);
  appendRange(res);
};

getRange();

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
const getDistrict = async () => {
  let res = await fetch(`${url}/district/getDistrict`);
  res = await res.json();
  console.log(res);
  appendtable(res)
};
getDistrict()
const addDistrict = async () => {
  // console.log(document.getElementById("ranges").value)
  let districtInput = document.getElementById("DistrictInput").value;
  districtInput = districtInput.toUpperCase();
  let obj = {
    rangeName: document.getElementById("ranges").value,
    rangeDistrictName: districtInput,
    State: "Haryana",
  };
  //   console.log(obj);
  obj = JSON.stringify(obj);
  let res = await fetch(`${url}/district/addDistrict`, {
    method: "POST",
    body: obj,
    headers: {
      "Content-type": "application/json",
    },
  });
  res = await res.json();
  console.log(res);
  if (res.status === 501) {
    alert("District Already Present");
  } else if (res.status === 200) {
    alert("District Added Successfuly!");
  }
  document.getElementById("ranges").value = "";
  document.getElementById("DistrictInput").value = "";
  getDistrict();
};

let appendtable = (data) => {
  let container = document.getElementById("tbody");
  container.innerHTML=null
  let i=0
  data.map((el) => {
    i++
    console.log(el);

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.innerText=i
    td2.innerHTML=el.rangeDistrictName
    td3.innerText=el.rangeName

    tr.append(td1,td2,td3)

    container.append(tr)


  });
};
