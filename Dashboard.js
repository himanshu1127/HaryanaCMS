const append = (data) => {
  let container = document.querySelector(".tableBody");
  container.innerHTML = null;
  if (data.length === 0) {
    container.innerText = `No Complain To This SHO`;
  } else {
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
      td2.innerText = el.ComplainantPhoneNumber;
      let td3 = document.createElement("td");
      td3.setAttribute("class", "tablecol");
      td3.setAttribute("class", "tablecol3");
      td3.innerText = el.ComplainantName;
      let td4 = document.createElement("td");
      td4.setAttribute("class", "tablecol");
      td4.setAttribute("class", "tablecol4");
      td4.innerText = `SP ${el.rangeDistrictName}`;
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
      p6.innerText = el.targetDate;
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
      p7.style.margin = "10px 0px 10px 0px";
      divStatus.append(p7);
      td7.append(divStatus);

      let td9 = document.createElement("td");
      td9.style.padding = "10px";
      let divtd9 = document.createElement("div");
      // divtd9.style.border="1px solid cyan"
      // divtd9.style.height = "40px";
      let p9 = document.createElement("p");
      p9.innerText = el.ComplainantPhoneNumber;
      p9.style.margin = "10px 0px 10px 0px";
      divtd9.append(p9);

      td9.append(divtd9);
      let td10 = document.createElement("td");
      td10.style.padding = "10px";
      let divtd10 = document.createElement("div");
      divtd10.style.height = "40px";
      let p10 = document.createElement("p");
      p10.innerText = el.Status;
      p10.style.margin = "10px 0px 10px 0px";
      divtd10.append(p10);
      td10.append(divtd10);

      if (el.ComplaintCategory === "CAW") {
        // divtd9.style.border = "1px solid navy";
        // divtd9.style.backgroundColor = "navy";
        // divtd9.style.boxSizing = "border-box";
        // divtd9.style.alignSelf = "center";
        // divtd9.style.height = "40px";
        // divtd9.style.color = "white";
      } else if (el.ComplaintCategory === "Officers") {
        // divtd9.style.border = "1px solid brown";
        // divtd9.style.backgroundColor = "brown";
        // divtd9.style.boxSizing = "border-box";
        // divtd9.style.alignSelf = "center";
        // divtd9.style.height = "40px";
        // divtd9.style.color = "white";
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
        divtd10.style.border = "1px solid lime";
        divtd10.style.backgroundColor = "lime";
        divtd10.style.boxSizing = "border-box";
        divtd10.style.alignSelf = "center";
        divtd10.style.height = "40px";
        divtd10.style.color = "white";
      } else if (el.Status === "PENDING") {
        divtd10.style.border = "1px solid red";
        divtd10.style.backgroundColor = "red";
        divtd10.style.boxSizing = "border-box";
        divtd10.style.alignSelf = "center";
        divtd10.style.height = "40px";
        divtd10.style.color = "white";
      } else if (el.Status === "DISPOSED") {
        divtd10.style.border = "1px solid blue";
        divtd10.style.backgroundColor = "blue";
        divtd10.style.boxSizing = "border-box";
        divtd10.style.alignSelf = "center";
        divtd10.style.height = "40px";
        divtd10.style.color = "white";
      } else if (el.Status === "OVERDUE") {
        divtd10.style.border = "1px solid darkviolet";
        divtd10.style.backgroundColor = "darkviolet";
        divtd10.style.boxSizing = "border-box";
        divtd10.style.alignSelf = "center";
        divtd10.style.height = "40px";
        divtd10.style.color = "white";
      } else if (el.Status === "REJECTED") {
        divtd10.style.border = "1px solid gray";
        divtd10.style.backgroundColor = "gray";
        divtd10.style.boxSizing = "border-box";
        divtd10.style.alignSelf = "center";
        divtd10.style.height = "40px";
        divtd10.style.color = "white";
      }

      let td8 = document.createElement("td");
      let divtd8 = document.createElement("div");
      divtd8.style.display = "inline";
      // divtd8.style.gap="5px"
      let updateIcon = document.createElement("button");
      updateIcon.addEventListener("click", () => {
        updateData(el);
      });

      let viewIcon = document.createElement("button");
      let commentsIcon = document.createElement("button");
      updateIcon.setAttribute("class", "buttonsAction");
      viewIcon.setAttribute("class", "buttonsAction");
      commentsIcon.setAttribute("class", "buttonsAction");
      updateIcon.innerHTML = '<i class="fa-solid fa-pen"></i>';
      updateIcon.style.width = "30%";

      viewIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
      viewIcon.style.margin = "5px";
      viewIcon.style.width = "20%";
      viewIcon.addEventListener("click", () => {
        viewData(el);
      });

      commentsIcon.innerHTML = '<i class="fa-solid fa-comment"></i>';
      commentsIcon.style.width = "40%";
      commentsIcon.addEventListener("click", () => {
        complainComment(el);
      });
      // commentsIcon.style.margin="5px"

      // td8.innerText = "hi";
      // updateIcon.innerHTML('<i class="fa-light fa-pen"></i>')

      td8.style.width = "15%";
      divtd8.append(updateIcon, viewIcon);
      td8.append(divtd8);
      tr.append(td1, td3, td9, td4, td10, td6);
      // console.log(tr);
      container.append(tr);
    });
  }
};
