const url = `https://haryanacms.onrender.com`;

let dataArr = [];
const userID = JSON.parse(localStorage.getItem("userID"));
// let getUser = async () => {
//   let res = await fetch(`${url}/user/user/${userID}`);
//   res = await res.json();
//   console.log(res);
// };

// let getComplain = async (data) => {
//   let res = await fetch(`${url}/complain/allcomplain`);
//   res = await res.json();
//   console.log(res);
//   data = res;
//   changeComplains(res);
//   return res;
//   // return dataArr;
// };
// const changeComplains = (data,value) => {
// //   const value = document.getElementById("ioselect").value;
//   console.log(data);
//   console.log(value);
// //   let newData = data.filter((el) => {
// //     console.log(value);
// //     if (value === "") {
// //       return el;
// //     } else {
// //       return el.Markto === value;
// //     }
// //   });
// //   console.log(newData);
// //   append(newData);
// };
// export { getUser, getComplain ,changeComplains};
let get = (id) => {
  return document.querySelector(id);
};
async function getUser() {
  const response = await fetch(`${url}/user/user/${userID}`);
  const data = await response.json();
  return data;
}

async function getComplain() {
  let res = await fetch(`${url}/complain/allcomplain`);
  res = await res.json();
  dataArr = res;
  return dataArr;
}
async function getVisitor() {
  let res = await fetch(`${url}/visitor/getvisitor`);
  res = await res.json();
  return res;
}
async function getRange() {
  let res = await fetch(`${url}/range/getRange`);
  res = await res.json();
  return res;
}

async function getIO() {
  let res = await fetch(`${url}/user/allio`);
  res = await res.json();
  return res;
}
async function getDistrict() {
  let res = await fetch(`${url}/district/getDistrict`);
  res = await res.json();
  return res;
}
async function getStation() {
  let res = await fetch(`${url}/policestation/getPolicestation`);
  res = await res.json();
  return res;
}

async function getCategory() {
  let res = await fetch(`${url}/category/getcategory`);
  res = res.json();
  return res;
}
async function getDSP() {
  let res = await fetch(`${url}/user/alldsp`);
  res = await res.json();
  return res;
}
async function getSP() {
  let res = await fetch(`${url}/user/allsp`);
  res = await res.json();
  return res;
}
async function getSHO() {
  let res = await fetch(`${url}/user/allsho`);
  res = await res.json();
  return res;
}
async function addCat(indexRoute, componentRoute, body) {
  let res = await fetch(`${url}/${indexRoute}/${componentRoute}`, {
    method: "POST",
    body: body,
    headers: {
      "Content-type": "application/json",
    },
  });
  res = await res.json();
  console.log(res);
  alert("ACT added Successfully");
  window.location.reload();
  return res;
}

async function getAct() {
  let res = await fetch(`${url}/act/getact`);
  res = res.json();
  return res;
}
async function addact(indexRoute, componentRoute, body) {
  let res = await fetch(`${url}/${indexRoute}/${componentRoute}`, {
    method: "POST",
    body: body,
    headers: {
      "Content-type": "application/json",
    },
  });
  res = await res.json();
  console.log(res);
  alert("ACT added Successfully");
  window.location.reload();
  return res;
}

async function loading() {
  return `
  <h1>Loading...</h1>
  `;
}

export {
  get,
  getUser,
  getComplain,
  getRange,
  getIO,
  loading,
  dataArr,
  getCategory,
  getDistrict,
  getStation,
  addCat,
  getDSP,
  getSP,
  getAct,
  addact,
  getSHO,
  getVisitor,
};
