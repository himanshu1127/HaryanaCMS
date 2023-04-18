let userId = JSON.parse(localStorage.getItem("userID"));
let user = {};
let complainData = [];
let commentArr = [];

const getComp = async () => {
  const url = `https://hrycms.onrender.com/complain/allcomplain`;
  let res = await fetch(url);
  let data = await res.json();
  // console.log(data);
  document.getElementById("complainantNumber").value = data.length + 1;
  // append(data);
};
const getUser = async () => {
  // console.log(userId);
  let obj = {
    id: userId,
  };
  obj = JSON.stringify(obj);
  try {
    let res = await fetch(`https://hrycms.onrender.com/user/user/${userId}`);
    res = await res.json();
    // console.log(res);
  } catch (err) {
    // console.log(err);
  }
};
getUser();
let setTargetDate = (date) => {
  // console.log(date)
  let currentDate = new Date(date);
  // console.log(currentDate);
  let targetDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
  targetDate = targetDate.toISOString().substring(0, 10);
  return targetDate;
};
// console.log(userId);
let url = `https://haryanacms.onrender.com/complain/create`;
const addComplain = async (event) => {
  event.preventDefault();
  let initialDate = document.getElementById("dateOfSub").value;
  let fileInput = document.getElementById("inputFiles");
  let compDate = document.getElementById("dateOfSub").value;
  console.log(compDate);
  // let file = document.getElementById("inputFiles").addEventListener("change",(event)=>{
  //   let file1 = event.target.files[0];
  //   console.log(file1);
  // })
  // let obj = {
  //   ComplainantName: document.getElementById("complainantName").value,
  //   Email: document.getElementById("complainantEmail").value,
  //   author_id: userId,
  //   policerange: document.getElementById("rangeInput").value,
  //   rangeDistrictName: document.getElementById("rangeInput").value,
  //   policestation: "",
  //   phoneNumber: "",
  //   createdAt: "",
  //   updatedAt: "",
  //   ComplainantPhoneNumber: document.getElementById("mobileNo").value,
  //   alternateNumber: document.getElementById("alternateNumber").value,
  //   FatherName: document.getElementById("fatherName").value,
  //   Address: document.getElementById("address").value,
  //   AddressLine1: document.getElementById("addressLine1").value,
  //   State: document.getElementById("stateInput").value,
  //   City: document.getElementById("cityInput").value,
  //   ComplaintCategory: document.getElementById("complainCategory").value,
  //   ComplaintShortDescription:
  //     document.getElementById("shortDescription").value,
  //   SectionsofComplaint: "",
  //   Range: document.getElementById("rangeInput").value,
  //   // SPName: document.getElementById("SPName").value,
  //   Status: document.getElementById("complainStatus").value,
  //   // Markto: document.getElementById("SPName").value,
  //   trackingId: document.getElementById("complainantNumber").value,
  //   complainDate: document.getElementById("dateOfSub").value,
  // };
  let form = new FormData();

  form.append(
    "ComplainantName",
    document.getElementById("complainantName").value
  );
  form.append("Email", document.getElementById("complainantEmail").value);
  form.append("author_id", userId);
  form.append("policerange", document.getElementById("rangeInput").value);
  form.append("rangeDistrictName", "");
  form.append("policestation", "");
  form.append("phoneNumber", "");
  form.append("createdAt", "");
  form.append("updatedAt", "");
  form.append(
    "ComplainantPhoneNumber",
    document.getElementById("mobileNo").value
  );
  form.append(
    "alternateNumber",
    document.getElementById("alternateNumber").value
  );
  form.append("FatherName", document.getElementById("fatherName").value);
  form.append("Address", document.getElementById("address").value);
  form.append("AddressLine1", document.getElementById("addressLine1").value);
  form.append("State", document.getElementById("stateInput").value);
  form.append("City", document.getElementById("cityInput").value);
  form.append(
    "ComplaintCategory",
    document.getElementById("complainCategory").value
  );
  form.append("complainDate", compDate);
  form.append("targetDate", setTargetDate(compDate));
  form.append(
    "ComplaintShortDescription",
    document.getElementById("shortDescription").value
  );
  form.append("SectionsofComplaint", "");
  form.append("Range", document.getElementById("rangeInput").value);
  // form.append("SPName", document.getElementById("SPName").value);
  form.append("Status", document.getElementById("complainStatus").value);
  // form.append("Markto", document.getElementById("SPName").value);
  form.append("trackingId", document.getElementById("complainantNumber").value);
  form.append("highPriority", document.getElementById("highPriority").checked);
  form.append("uploadpdfcomplaint", fileInput.files[0]);
  // obj = JSON.stringify(obj);

  // console.log(file);
  console.log(form);
  try {
    let res = await fetch(url, {
      method: "POST",
      body: form,
      headers: {
        enctype: "multipart/form-data",
      },
    });
    res = await res.json();
    console.log(res);
    let displayAddComp1 = document.querySelector(".displayAddComp");
    displayAddComp1.classList.toggle("activeAddComp");
    alert("Complain Added Successfuly!");
    getComp();
  } catch (err) {
    console.log(err);
  }
};

let container = document.querySelector(".tableBody");

let convertDate = (id) => {
  let myDate = new Date(id);
  return myDate.toLocaleDateString();
};
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
    td4.innerText = el.complainDate;
    let td5 = document.createElement("td");
    td5.setAttribute("class", "tablecol");
    td5.setAttribute("class", "tablecol5");
    td5.innerText = el.targetDate;
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
    divStatus.style.height = "40px";
    let p10 = document.createElement("p");
    p10.innerText = el.Status;
    p10.style.margin = "10px 0px 10px 0px";
    divStatus.append(p10);
    td7.append(divStatus);

    let td9 = document.createElement("td");
    td9.style.padding = "10px";
    let divtd9 = document.createElement("div");
    // divtd9.style.border="1px solid cyan"
    divtd9.style.height = "40px";
    let p9 = document.createElement("p");
    p9.innerText = el.ComplaintCategory;
    p9.style.margin = "10px 0px 10px 0px";
    divtd9.append(p9);

    td9.append(divtd9);
    // let td10 = document.createElement("td");
    // td10.innerText = el.Status;

    if (el.ComplaintCategory === "CAW") {
      divtd9.style.border = "1px solid navy";
      divtd9.style.backgroundColor = "navy";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
      divtd9.style.height = "40px";
      divtd9.style.color = "white";
    } else if (el.ComplaintCategory === "Officers") {
      divtd9.style.border = "1px solid brown";
      divtd9.style.backgroundColor = "brown";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
      divtd9.style.height = "40px";
      divtd9.style.color = "white";
    }

    if (el.highPriority) {
      divarea.style.border = "1px solid green";
      divarea.style.backgroundColor = "green";
      divarea.style.boxSizing = "border-box";
      divarea.style.alignSelf = "center";
      divarea.style.height = "40px";
      divarea.style.color = "white";
    }

    if (el.Status === "IN-PROCESS") {
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
    } else if (el.Status === "DISPOSED") {
      divStatus.style.border = "1px solid blue";
      divStatus.style.backgroundColor = "blue";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    } else if (el.Status === "OVERDUE") {
      divStatus.style.border = "1px solid darkviolet";
      divStatus.style.backgroundColor = "darkviolet";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    } else if (el.Status === "REJECTED") {
      divStatus.style.border = "1px solid gray";
      divStatus.style.backgroundColor = "gray";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    }

    let td8 = document.createElement("td");
    td8.style.padding = "10px";
    let divtd8 = document.createElement("div");
    divtd8.style.display = "inline";
    // divtd8.style.gap="5px"
    let updateIcon = document.createElement("button");

    let viewIcon = document.createElement("button");
    viewIcon.addEventListener("click", () => {
      viewData(el);
    });
    let commentsIcon = document.createElement("button");
    updateIcon.setAttribute("class", "buttonsAction");
    updateIcon.setAttribute("id", "updateComp");
    viewIcon.setAttribute("class", "buttonsAction");
    commentsIcon.setAttribute("class", "buttonsAction");
    updateIcon.innerHTML = '<i class="fa-solid fa-pen"></i>';
    updateIcon.addEventListener("click", () => {
      updateData(el);
    });
    updateIcon.style.width = "25%";

    viewIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    viewIcon.style.margin = "5px";
    viewIcon.style.width = "25%";

    commentsIcon.innerHTML = '<i class="fa-solid fa-comment"></i>';
    commentsIcon.style.width = "40%";
    commentsIcon.addEventListener("click", () => {
      complainComment(el);
    });
    // commentsIcon.style.margin="5px"

    // td8.innerText = "hi";
    // updateIcon.innerHTML('<i class="fa-light fa-pen"></i>')

    divtd8.append(updateIcon, viewIcon, commentsIcon);
    td8.append(divtd8);
    tr.append(td1, td3, td9, td4, td5, td6, td7, td8);
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
let complainID = {};
const get = (id) => {
  return document.getElementById(id);
};
// const getRange1 = async () => {
//   let res = await fetch(`https://hrycms.onrender.com/range/getRange`);
//   res = await res.json();
//   console.log(res);
//   appendRange1(res);
// };
// const getSp1 = async () => {
//   let res = await fetch(`https://hrycms.onrender.com/district/getdistrict`);
//   res = await res.json();
//   console.log(res);
//   // appendDistrict(res);
// };

// let appendRange1 = (data) => {
//   let rangeInputUpdate = document.getElementById("rangeInputUpdate");
//   data.map((el) => {
//     let option = document.createElement("option");
//     option.innerText = el.rangeName;
//     option.value = el.rangeName;
//     // console.log(option)
//     // container.append(option);
//     rangeInputUpdate.append(option);
//     // rangeInput.append(option)
//     // console.log(rangeInputUpdate)
//     // console.log(rangeInput)
//   });
// };
// // const appendDistrict = (data) => {
// //   let SPNameUpdate1 = document.getElementById("DistrictUpdate1");
// //   SPNameUpdate1.innerHTML = null;

// //   data.map((el) => {
// //     // console.log(el)
// //     let option = document.createElement("option");
// //     option.innerText = `${el.fname} ${el.lname}`;
// //     option.value = el.email;
// //     // console.log(option)
// //     SPNameUpdate1.append(option);
// //   });
// // };
// getRange1();
// getSp1();
const updateData = async (el) => {
  let displayUpdateComp = document.querySelector(".displayUpdateComp");
  displayUpdateComp.classList.toggle("activeUpdateComp");
  complainID = el;
  console.log(el);
  get("complainantNameUpdate").value = el.ComplainantName;
  get("fatherNameUpdate").value = el.FatherName;
  get("complainantEmailUpdate").value = el.Email;
  get("addressUpdate").value = el.Address;
  get("mobileNoUpdate").value = el.ComplainantPhoneNumber;
  get("addressLine1Update").value = el.AddressLine1;
  get("alternateNumberUpdate").value = el.alternateNumber;
  get("cityInputUpdate").value = el.City;
  get("rangeInputUpdate").value = el.policerange;
  get("DistrictUpdate1").value = el.rangeDistrictName;
  get("complainStatusUpdate").value = el.Status;
  get("shortDescriptionUpdate").value = el.ComplaintShortDescription;
  get("complainCategoryUpdate").value = el.ComplaintCategory;
  get("complainantNumberUpdate").value = el.trackingId;
  // get("sectionsUpdate").value=el.
  // get("highPriorityUpdate").value=el.

  return complainID;
};
let updateComp = document.querySelector(".closeIconUpdate");
updateComp.onclick = function () {
  let compUpdate = document.querySelector(".displayUpdateComp");
  compUpdate.classList.toggle("activeUpdateComp");
};
const viewData = (el) => {
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
  get("DistrictView1").value = el.rangeDistrictName;
  get("complainStatusView").value = el.Status;
  get("shortDescriptionView").value = el.ComplaintShortDescription;
  get("complainCategoryView").value = el.ComplaintCategory;
  get("complainantNumberView").value = el.trackingId;
  get("dateOfSubView").value = convertDate(el.createdAt);
  get("highPriorityUpdate").checked = el.highPriority;
};
// console.log(displayUpdateComp)

let ViewComp = document.querySelector(".closeIconView");
ViewComp.onclick = function () {
  let compUpdate = document.querySelector(".displayViewComp");
  compUpdate.classList.toggle("activeUpdateComp");
};
const updateComplain = async () => {
  // console.log(`https://hrycms.onrender.com/complain/update/${complainID._id}`)
  let obj = {
    ComplainantName: document.getElementById("complainantNameUpdate").value,
    Email: document.getElementById("complainantEmailUpdate").value,
    author_id: userId,
    policerange: document.getElementById("rangeInputUpdate").value,
    rangeDistrictName: document.getElementById("DistrictUpdate1").value,
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
    ComplaintShortDescription: document.getElementById("shortDescriptionUpdate")
      .value,
    SectionsofComplaint: "",
    Range: document.getElementById("rangeInputUpdate").value,
    highPriority: document.getElementById("highPriorityUpdate").checked,
    // SPName: document.getElementById("SPNameUpdate1").value,
    Status: document.getElementById("complainStatusUpdate").value,
    // Markto: document.getElementById("SPNameUpdate1").value,
  };
  obj = JSON.stringify(obj);
  console.log(obj);

  let res = await fetch(
    `https://hrycms.onrender.com/complain/update/${complainID._id}`,
    {
      method: "PUT",
      body: obj,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  res = await res.json();
  console.log(res);
  getComp();
  alert("Update");
  let compUpdate = document.querySelector(".displayUpdateComp");
  compUpdate.classList.toggle("activeUpdateComp");
};
let commentDiv = document.querySelector(".commentDiv");
const showComp = async () => {
  let res = await fetch(`https://haryanacms.onrender.com/comment/getcomment`);
  res = await res.json();
  console.log(res);

  commentArr = res.filter((elem) => {
    return elem.complain_id === complainID._id;
  });
  console.log(commentArr);
  appendComment(commentArr);
};
const complainComment = async (el) => {
  complainID = el;
  console.log(el);
  commentDiv.classList.toggle("activecommentDiv");
  // console.log(user)
  showComp();
};
let addComm = async (event) => {
  event.preventDefault();
  // let obj = {
  //   author_id: user._id,
  //   complain_id: complainID._id,
  //   authorName: `${user.fname} ${user.lname}`,
  //   commentData: document.getElementById("commentText").value,
  // };
  let obj = {
    author_id: user._id,
    complain_id: complainID._id,
    authorName: `${user.fname} ${user.lname}`,
    commentData: document.getElementById("commentText").value,
    Designation: user.designation,
  };
  obj = JSON.stringify(obj);
  console.log(obj);
  try {
    let res = await fetch(
      `https://haryanacms.onrender.com/comment/addcomment`,
      {
        method: "POST",
        body: obj,
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    res = await res.json();
    alert("Comment Posted");
    // commentDiv.classList.toggle("activecommentDiv");
    showComp();
    document.getElementById("commentText").value = "";
    console.log(res);
  } catch (err) {}
};
// let addComment = document.getElementById("addComment");
// addComment.addEventListener("submit", ()=>{
//   addComm(event)
// });

let closeIconComment = document.querySelector(".closeIconComment");
closeIconComment.addEventListener("click", () => {
  commentDiv.classList.toggle("activecommentDiv");
});

let appendComment = (data) => {
  let contan = document.querySelector(".showComments");
  contan.innerHTML = null;
  if (data.length > 0) {
    data.map((el) => {
      let div = document.createElement("div");
      div.setAttribute("class", "commentDivView");
      let h4 = document.createElement("h4");
      let p = document.createElement("p");
      console.log(el);
      let h41 = document.createElement("h4");
      let span = document.createElement("span");
      span.innerText = "Comment By";
      if (el.Designation === "ADGP") {
        h4.style.color = "red";
      }

      h4.innerText = `${el.Designation} ${el.authorName}`;
      h41.append(span, h4);
      h4.setAttribute("class", "commentUserView");
      p.innerText = el.commentData;
      p.setAttribute("class", "commentTextView");
      div.append(h41, p);
      contan.append(div);
    });
  } else {
    contan.innerHTML = "<h3>No Comments</h3>";
  }
};

// filter

let filteredData = [];
const rangeFilter = () => {
  const value = document.getElementById("rangesFilter").value;
  filteredData = complainData.filter((el) => {
    return el.policerange === value;
  });
};
