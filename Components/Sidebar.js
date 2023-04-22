const sidebar = () => {
  return `
    <div style="display: flex; justify-content: space-between">
      <div>Home</div>
      <div><a href="./Dashboard.html">Dashboard</a></div>
    </div>
    <div id="sideMenu">
      <p>Manage Complaints</p>
      <ul>
        <li class="liText">
          <a class="aTag" href="./complaints.html"
            >Add/View/Update Complaint</a
          >
        </li>
        <li class="liText">
          <a class="aTag" href="./HighPriority.html"
            >Add/View/Update High Priority</a
          >
        </li>
        <li class="liText">
          <a class="aTag" href="./pending.html">Update/View Pending</a>
        </li>

        <li class="liText">
          <a class="aTag" href="./addOrViewVisitor.html"
            >Add/Update/View Visitor Complaints</a
          >
        </li>
      </ul>
      <p>Manage Officers Data</p>
      <ul>
        <li class="liText">
          <a class="aTag" href="./addorviewSP.html"> Add/View/Update SP </a>
        </li>
        <li class="liText">
          <a class="aTag" href="./addorviewDSP.html">Add/View/Update DSP</a>
        </li>
        <li class="liText">
          <a class="aTag" href="./addorviewASP.html">Add/View/Update ASP</a>
        </li>
        <li class="liText">
          <a class="aTag" href="./AddViewSho.html">Add/View/Update SHO</a>
        </li>
        <li class="liText">
          <a class="aTag" href="./addorviewIO.html">Add/View/Update IO</a>
        </li>
      </ul>
      <p>Manage Category</p>
      <ul>
        <li class="liText">
          <a class="aTag" href="./category.html"
            >Add/View/Update Category</a
          >
        </li>
        <li class="liText">
          <a class="aTag" href="./addorviewACT.html">Add/View/Update ACT</a>
        </li>
      </ul>
      <p>Manage Areas</p>
      <ul>
        <li class="liText">
          <a class="aTag" href="./addorviewDist.html"
            >Add/View/Update Districts</a
          >
        </li>
        <li class="liText">
          <a class="aTag" href="./addorviewRange.html"
            >Add/View/Update Range</a
          >
        </li>
        <li class="liText">
          <a class="aTag" href="./addorviewPoliceStation.html"
            >Add/View/Update Police Station</a
          >
        </li>
      </ul>
      <!-- <p>Manage Dept.</p>
      <p>Manage Category</p>
      <p>Manage Users (SHO)</p>
      <p>Manage Data</p> -->
    </div>
  `;
};

export default sidebar;
