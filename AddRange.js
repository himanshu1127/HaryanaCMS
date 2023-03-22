const url = `https://haryanacms.onrender.com`;

const getRange = async () => {
  let res = await fetch(`${url}/range//getRange`);
  res = await res.json();
  console.log(res);
  appendtable(res);
};

getRange();

const addRange = async () => {
  let rangeInp = document.getElementById("rangeInput").value;
  rangeInp = rangeInp.toUpperCase();
  let obj = {
    rangeName: rangeInp,
    State: "Haryana",
  };
  obj = JSON.stringify(obj);
  // console.log(obj)
  let res = await fetch(`${url}/range/addRange`, {
    method: "POST",
    body: obj,
    headers: {
      "Content-Type": "application/json",
    },
  });
  res = await res.json();
  console.log(res);
  if (res.status === 501) {
    alert("Range Already Present");
  } else if (res.status === 200) {
    alert("Range Added Successfuly!");
  }
  document.getElementById("rangeInput").value = "";
  getRange();
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
    td2.innerHTML=el.rangeName
    td3.innerText=el.State

    tr.append(td1,td2,td3)

    container.append(tr)


  });
};
