let userId = JSON.parse(localStorage.getItem("userID"));

const getComp = async () => {
  const url = `https://haryanacms.onrender.com/complain/allcomplain`;
  let res = await fetch(url);
  let data = await res.json();
  // console.log(data);
  document.getElementById("complainantNumber").value = data.length + 1;
  append(data);
};
const getUser = async () => {
  // console.log(userId);
  let obj = {
    id: userId,
  };
  obj = JSON.stringify(obj);
  try {
    let res = await fetch(
      `https://haryanacms.onrender.com/user/user/${userId}`
    );
    res = await res.json();
    // console.log(res);
  } catch (err) {
    // console.log(err);
  }
};
getUser();
// console.log(userId);
let url = `https://haryanacms.onrender.com/complain/create`;
const addComplain = async () => {
  let initialDate = document.getElementById("dateOfSub").value;
  let obj = {
    ComplainantName: document.getElementById("complainantName").value,
    Email: document.getElementById("complainantEmail").value,
    author_id: userId,
    policerange: document.getElementById("rangeInput").value,
    rangeDistrictName: document.getElementById("rangeInput").value,
    policestation: "",
    phoneNumber: "",
    createdAt: "",
    updatedAt: "",
    ComplainantPhoneNumber: document.getElementById("mobileNo").value,
    alternateNumber: document.getElementById("alternateNumber").value,
    FatherName: document.getElementById("fatherName").value,
    Address: document.getElementById("address").value,
    AddressLine1: document.getElementById("addressLine1").value,
    State: document.getElementById("stateInput").value,
    City: document.getElementById("cityInput").value,
    ComplaintCategory: document.getElementById("complainCategory").value,
    ComplaintShortDescription:
      document.getElementById("shortDescription").value,
    SectionsofComplaint: "",
    Range: document.getElementById("rangeInput").value,
    SPName: document.getElementById("SPName").value,
    Status: document.getElementById("complainStatus").value,
    Markto: document.getElementById("SPName").value,
    trackingId: document.getElementById("complainantNumber").value,
    complainDate: document.getElementById("dateOfSub").value,
  };
  obj = JSON.stringify(obj);
  console.log(obj);
  try {
    let res = await fetch(url, {
      method: "POST",
      body: obj,
      headers: {
        "Content-type": "application/json",
      },
    });
    res = await res.json();
    console.log(res);
    let displayAddComp1=document.querySelector(".displayAddComp")
    displayAddComp1.classList.toggle("activeAddComp");
    alert("Complain Added Successfuly!")
    getComp();
  } catch (err) {
    console.log(err);
  }
};

let container = document.querySelector(".tableBody");

let convertDate=(id)=>{
  let myDate = new Date(id);
  return myDate.toLocaleDateString()
}
const append = (data) => {
  document.getElementById("totalComplaints").innerText = data.length;
  container.innerHTML = null;
  data.forEach((el) => {
    // console.log(el);
    let tr = document.createElement("tr");
    tr.setAttribute("class", "tableRow");
    let td1 = document.createElement("td");
    td1.setAttribute("class", "tablecol");
    td1.setAttribute("class", "tablecol1");
    td1.innerText = el.trackingId;
    let td2 = document.createElement("td");
    td2.setAttribute("class", "tablecol");
    td2.setAttribute("class", "tablecol2");
    td2.innerText = el.category;
    let td3 = document.createElement("td");
    td3.setAttribute("class", "tablecol");
    td3.setAttribute("class", "tablecol3");
    td3.innerText = el.ComplainantName;
    let td4 = document.createElement("td");
    td4.setAttribute("class", "tablecol");
    td4.setAttribute("class", "tablecol4");
    td4.innerText = convertDate(el.createdAt);
    let td5 = document.createElement("td");
    td5.setAttribute("class", "tablecol");
    td5.setAttribute("class", "tablecol5");
    td5.innerText = el.deadline;
    let td6 = document.createElement("td");
    td6.setAttribute("class", "tablecol");
    td6.setAttribute("class", "tablecol6");
    // td6.style.border = "1px solid red";
    td6.style.padding = "10px";
    let divarea = document.createElement("div");
    let p6 = document.createElement("p");
    p6.innerText = el.City;
    p6.style.margin = "10px 0px 10px 0px";
    // p6.style.border="1px solid cyan"
    divarea.style.borderRadius = "2%";
    divarea.append(p6);
    td6.append(divarea);
    let td7 = document.createElement("td");
    td7.setAttribute("class", "tablecol");
    td7.setAttribute("class", "tablecol7");
    td7.style.padding = "10px";
    let divStatus = document.createElement("div");
    let p7 = document.createElement("p");
    p7.innerText = el.status;
    p7.style.margin = "";
    divStatus.append(p7);
    td7.append(divStatus);

    let td9 = document.createElement("td");
    td9.style.padding = "10px";
    divtd9 = document.createElement("div");
    // divtd9.style.border="1px solid cyan"
    divtd9.style.height = "40px";
    let p9 = document.createElement("p");
    p9.innerText = el.ComplaintCategory;
    p9.style.margin = "10px 0px 10px 0px";
    divtd9.append(p9);

    td9.append(divtd9);
    let td10 = document.createElement("td");
    td10.innerText = el.Status;

    if (el.complaintType === "CAW") {
      divtd9.style.border = "1px solid navy";
      divtd9.style.backgroundColor = "navy";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
      divtd9.style.height = "40px";
      divtd9.style.color = "white";
    } else if (el.complaintType === "Officers") {
      divtd9.style.border = "1px solid brown";
      divtd9.style.backgroundColor = "brown";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
      divtd9.style.height = "40px";
      divtd9.style.color = "white";
    }

    if (el.priority === "high") {
      divarea.style.border = "1px solid green";
      divarea.style.backgroundColor = "green";
      divarea.style.boxSizing = "border-box";
      divarea.style.alignSelf = "center";
      divarea.style.height = "40px";
      divarea.style.color = "white";
    }

    if (el.status === "progress") {
      divStatus.style.border = "1px solid lime";
      divStatus.style.backgroundColor = "lime";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    } else if (el.Status === "PENDING") {
      divStatus.style.border = "1px solid red";
      divStatus.style.backgroundColor = "red";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    } else if (el.status === "closed") {
      divStatus.style.border = "1px solid blue";
      divStatus.style.backgroundColor = "blue";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    } else if (el.status === "overdue") {
      divStatus.style.border = "1px solid darkviolet";
      divStatus.style.backgroundColor = "darkviolet";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    } else if (el.status === "rejected") {
      divStatus.style.border = "1px solid gray";
      divStatus.style.backgroundColor = "gray";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    }

    let td8 = document.createElement("td");
    let divtd8 = document.createElement("div");
    divtd8.style.display = "inline";
    // divtd8.style.gap="5px"
    let updateIcon = document.createElement("button");

    let viewIcon = document.createElement("button");
    viewIcon.addEventListener("click",()=>{
      viewData(el)
    })
    let commentsIcon = document.createElement("button");
    updateIcon.setAttribute("class", "buttonsAction");
    updateIcon.setAttribute("id", "updateComp");
    viewIcon.setAttribute("class", "buttonsAction");
    commentsIcon.setAttribute("class", "buttonsAction");
    updateIcon.innerText = "Update";
    updateIcon.addEventListener("click", () => {
      updateData(el);
    });
    updateIcon.style.width = "30%";

    viewIcon.innerText = "View";
    viewIcon.style.margin = "5px";
    viewIcon.style.width = "20%";

    commentsIcon.innerText = "Comment";
    commentsIcon.style.width = "40%";
    // commentsIcon.style.margin="5px"

    // td8.innerText = "hi";
    // updateIcon.innerHTML('<i class="fa-light fa-pen"></i>')

    divtd8.append(updateIcon, viewIcon, commentsIcon);
    td8.append(divtd8);
    tr.append(td1, td3, td9, td4, td5, td6, td10, td8);
    // console.log(tr);
    container.append(tr);
  });

  //   console.log(container);

  //   <tr className="tableRow" key={el.id}>
  //     <td className="tablecol1 tablecol">{el.trackingId}</td>
  //     <td className="tablecol2 tablecol">{el.category}</td>
  //     <td className="tablecol3 tablecol">{el.complainant}</td>
  //     <td className="tablecol4 tablecol">{el.IssuedDate}</td>
  //     <td className="tablecol5 tablecol">{el.deadline}</td>
  //     <td className="tablecol6 tablecol">{el.area}</td>
  //     <td className="tablecol7 tablecol">{el.status}</td>
  //     <td className="tablecol8 tablecol">
  //       <div className="tablecol8Action">
  //         <ReceiptIcon />
  //       </div>
  //       <div className="tablecol8Delete">
  //         <DeleteIcon />
  //       </div>
  //     </td>
  //   </tr>;
};
getComp();

// Update Complain
let a ={};
const get = (id) => {
  return document.getElementById(id);
};
const getRange1 = async () => {
  let res = await fetch(`https://haryanacms.onrender.com/range/getRange`);
  res = await res.json();
  console.log(res);
  appendRange1(res);
};
const getDistrict1 =async()=>{
  let res = await fetch(`https://haryanacms.onrender.com/district/getDistrict`);
  res = await res.json();
  console.log(res);
  appendSp1(res);
}

let appendRange1=(data)=>{
  let rangeInputUpdate1 = document.getElementById("rangeInputUpdate1")
  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = el.rangeName;
    option.value = el.rangeName;
    // console.log(option)
    // container.append(option);
    rangeInputUpdate1.append(option)
    // rangeInput.append(option)
    // console.log(rangeInputUpdate1)
    // console.log(rangeInput)
  });
}
const appendSp1 = (data) => {
  let SPNameUpdate1 = document.getElementById("SPNameUpdate1");

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = `${el.fname} ${el.lname}`;
    option.value = el.email;
    // console.log(option)
    SPNameUpdate1.append(option);
  });
};
const updateData = async (el) => {
  let displayUpdateComp = document.querySelector(".displayUpdateComp");
  displayUpdateComp.classList.toggle("activeUpdateComp");
  a=el
  console.log(el);
  getRange1()
  getDistrict1()
  get("complainantNameUpdate").value = el.ComplainantName;
  get("fatherNameUpdate").value = el.FatherName;
  get("complainantEmailUpdate").value = el.Email;
  get("addressUpdate").value = el.Address;
  get("mobileNoUpdate").value = el.ComplainantPhoneNumber;
  get("addressLine1Update").value = el.AddressLine1;
  get("alternateNumberUpdate").value = el.alternateNumber;
  get("cityInputUpdate").value = el.City;
  get("rangeInputUpdate1").value = el.policerange;
  get("SPNameUpdate1").value = el.SPName;
  get("complainStatusUpdate").value = el.Status;
  get("shortDescriptionUpdate").value = el.ComplaintShortDescription;
  get("complainCategoryUpdate").value = el.ComplaintCategory;
  get("complainantNumberView").value=el.trackingId
  // get("sectionsUpdate").value=el.
  // get("highPriorityUpdate").value=el.


  return a;
};
let updateComp = document.querySelector(".closeIconUpdate");
updateComp.onclick = function () {
  let compUpdate = document.querySelector(".displayUpdateComp");
  compUpdate.classList.toggle("activeUpdateComp");
};
const viewData =(el)=>{
  let displayViewComp = document.querySelector(".displayViewComp");
  displayViewComp.classList.toggle("activeUpdateComp");
  get("complainantNameView").value = el.ComplainantName;
  get("fatherNameView").value = el.FatherName;
  get("complainantEmailView").value = el.Email;
  get("addressView").value = el.Address;
  get("mobileNoView").value = el.ComplainantPhoneNumber;
  get("addressLine1View").value = el.AddressLine1;
  get("alternateNumberView").value = el.alternateNumber;
  get("cityInputView").value = el.City;
  get("rangeInputView1").value = el.policerange;
  get("SPNameView1").value = el.SPName;
  get("complainStatusView").value = el.Status;
  get("shortDescriptionView").value = el.ComplaintShortDescription;
  get("complainCategoryView").value = el.ComplaintCategory;
  get("complainantNumberView").value=el.trackingId
  get("dateOfSubView").value = convertDate(el.createdAt);
}
// console.log(displayUpdateComp)


let ViewComp = document.querySelector(".closeIconView");
ViewComp.onclick = function () {
  let compUpdate = document.querySelector(".displayViewComp");
  compUpdate.classList.toggle("activeUpdateComp");
};
const updateComplain = async () => {
  // console.log(`https://haryanacms.onrender.com/complain/update/${a._id}`)
  let obj = {
    ComplainantName: document.getElementById("complainantNameUpdate").value,
    Email: document.getElementById("complainantEmailUpdate").value,
    author_id: userId,
    policerange: document.getElementById("rangeInputUpdate1").value,
    rangeDistrictName: document.getElementById("rangeInputUpdate1").value,
    policestation: "",
    phoneNumber: "",
    createdAt: "",
    updatedAt: "",
    ComplainantPhoneNumber: document.getElementById("mobileNoUpdate").value,
    alternateNumber: document.getElementById("alternateNumberUpdate").value,
    FatherName: document.getElementById("fatherNameUpdate").value,
    Address: document.getElementById("addressUpdate").value,
    AddressLine1: document.getElementById("addressLine1Update").value,
    State: document.getElementById("stateInputUpdate").value,
    City: document.getElementById("cityInputUpdate").value,
    ComplaintCategory: document.getElementById("complainCategoryUpdate").value,
    ComplaintShortDescription:
      document.getElementById("shortDescriptionUpdate").value,
    SectionsofComplaint: "",
    Range: document.getElementById("rangeInputUpdate1").value,
    SPName: document.getElementById("SPNameUpdate1").value,
    Status: document.getElementById("complainStatusUpdate").value,
    Markto: document.getElementById("SPNameUpdate1").value,
  };
  obj = JSON.stringify(obj)
  console.log(obj)

  let res = await fetch (`https://haryanacms.onrender.com/complain/update/${a._id}`,{
    method:"PUT",
    body:obj,
    headers:{
      "Content-Type": "application/json"
    }
  })
  res = await res.json()
  console.log(res)
  getComp()
  // alert("Update");
  // let compUpdate = document.querySelector(".displayUpdateComp");
  // compUpdate.classList.toggle("activeUpdateComp");
};
