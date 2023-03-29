const getComp = async () => {
  const url = `https://haryanacms.onrender.com/complain/allcomplain`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  document.getElementById("activeComplaints").innerText = data.length;
  document.getElementById("pendingComplaints").innerText = data.length - 1;
  document.getElementById("pendingHighComp").innerText = data.length - 2;
};
getComp();
