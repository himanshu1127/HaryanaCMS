const addComplain = () => {
  return `<div class="displayAddComp">
  <div class="addComp">
    <div>
      <div class="upperDivAddComp">
        <h3 class="h3AddComp">Add Complaints</h3>
        <div class="closeIcon">
          <div class="line1"></div>
          <div class="line2"></div>
        </div>
      </div>
    </div>

    <div class="divComplaints">
      <div class="complaintsContent">
        <div class="">
          <label class="complaintsFormLabel"
            >Complaint Number: <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="complainantNumber"
              placeholder="Complaint Number"
              class="complaintsInput"
              required
              readonly
            />
          </div>
        </div>
        <div>
          <label class="complaintsFormLabel"
            >Complainant Name: <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="complainantName"
              placeholder="Complainant Name"
              class="complaintsInput"
              required
            />
          </div>
        </div>
        <div>
          <label class="complaintsFormLabel"
            >Father's Name : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              required
              id="fatherName"
              placeholder="Father's Name"
              class="complaintsInput"
            />
          </div>
        </div>
        <div>
          <label class="complaintsFormLabel"
            >Email ID: <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="complainantEmail"
              placeholder="Email"
              class="complaintsInput"
              required
            />
          </div>
        </div>
      </div>
      <div class="addressLine1andMobileDiv">
        <div class="complaintsAddressDiv">
          <label class="complaintsFormLabel"
            >Address Line 1 <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="address"
              placeholder="Address Line 1"
              class="complaintsInput"
              required
            />
          </div>
        </div>
        <div class="complaintPhoneDiv">
          <label class="complaintsFormLabel"
            >Mobile Number. : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="tel"
              name=""
              id="mobileNo"
              placeholder="Phone Number"
              class="complaintsInput"
              minlength="10"
              maxlength="10"
              pattern="[0-9]{10}"
              required
            />
          </div>
        </div>
      </div>
      <div class="complaintsContentDivtopLeft contentDiv">
        <div class="complaintsAddressDiv">
          <label class="complaintsFormLabel">Address Line 2</label>
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="addressLine1"
              placeholder="Address Line 2"
              class="complaintsInput"
            />
          </div>
        </div>
        <div class="complaintPhoneDiv">
          <label class="complaintsFormLabel">Alternate Number. :</label>
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="alternateNumber"
              pattern="[0-9]{10}"
              minlength="10"
              maxlength="10"
              placeholder="Alternate Number"
              class="complaintsInput"
            />
          </div>
        </div>
      </div>
      <div class="cityandState">
        <div class="">
          <label class="complaintsFormLabel"
            >City : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="cityInput"
              placeholder="City"
              class="complaintsInput"
              required
            />
          </div>
        </div>
        <div class="">
          <label class="complaintsFormLabel"
            >State : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <select
              name=""
              id="stateInput"
              class="complaintsInput"
              disabled
            >
              <option value="HARYANA">HARYANA</option>
            </select>
          </div>
        </div>
      </div>

      <div class="rangeAndSP">
        <div class="">
          <label class="complaintsFormLabel"
            >Range : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <select
              name=""
              id="rangeInput"
              class="complaintsInput"
              required
            >
              <option value="">Select Range</option>
            </select>
          </div>
        </div>
        <div class="">
          <label class="complaintsFormLabel"
            >District : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <select
              name=""
              id="district"
              class="complaintsInput"
              required
            >
              <option value="select">Select District</option>
            </select>
          </div>
        </div>

        <div>
          <label class="complaintsFormLabel"
            >Status : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <select
              name=""
              id="complainStatus"
              class="complaintsInput"
              required
            >
              <option value="PENDING">PENDING</option>
              <option value="IN-PROCESS">IN-PROCESS</option>
              <option value="DISPOSED">DISPOSED</option>
              <option value="OVERDUE">OVERDUE</option>
              <option value="REJECTED">REJECTED</option>
            </select>
          </div>
        </div>
      </div>
      <div class="complaintsText">
        <div class="">
          <label class="complaintsFormLabel"
            >Complaint Short Description
            <span class="required">*</span></label
          >
          <div class="complaintsTextArea">
            <textarea
              type="text"
              name=""
              id="shortDescription"
              placeholder="Complaint Short Description"
              class="p-2 mr-2 border-2 rounded w-full h-44"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="complaintsText bottomDiv">
        <div class="m-5 flex-1">
          <label class="complaintsFormLabel"
            >Date of Submission <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="date"
              name=""
              id="dateOfSub"
              placeholder=""
              class="complaintsInput"
              required
            />
          </div>
        </div>

        <div class="highPriorityCheckDiv">
          <div class="complaintContnetDivLeftTop">
            <input type="checkbox" name="priority" id="highPriority" />
          </div>
          <label for="priority">High Priority</label>
        </div>
      </div>

      <div class="specialDiv">
        <div>
          <label class="complaintsFormLabel"
            >Complaints Category : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <select
              name=""
              id="complainCategory"
              class="complaintsInput"
              required
            ></select>
          </div>
        </div>
        <div>
          <label class="complaintsFormLabel" for="sections"
            >ACT : <span class="required">*</span></label
          >
          <select
            name=""
            id="act"
            class="complaintsInput"
            required
          ></select>
        </div>
        <div>
          <label class="complaintsFormLabel">Sections :</label>
          <div class="complaintContnetDivLeftTop">
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
        </div>
      </div>
      <div class="filesDiv">
        <p>Upload Files</p>
        <div class="specialDivInner">
          <div class="complaintContnetDivLeftTop">
            <input
              type="file"
              name=""
              id="inputFiles"
              placeholder="Special Remark"
              class="complaintsInput"
              multiple
            />
            <div id="inputFilesText"></div>
          </div>
        </div>
      </div>
      <br />
      <input type="submit" value="Add" class="addButton" />
    </div>
  </div>
</div>`;
};
const updateComplain = () => {
  return `<div class="updateComp">
  <div>
    <div class="upperDivAddComp">
      <h3 class="h3AddComp">Update Complaint</h3>
      <div class="closeIconUpdate">
        <div class="line1"></div>
        <div class="line2"></div>
      </div>
    </div>
  </div>
  <form id="updateComplain" onsubmit="updateComplain(event)">
    <div class="divComplaints">
      <div class="complaintsContent">
        <div class="">
          <label class="complaintsFormLabel"
            >Complaint Number: <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="complainantNumberUpdate"
              disabled
              placeholder="Complaint Number"
              class="complaintsInput"
              required
            />
          </div>
        </div>
        <div>
          <label class="complaintsFormLabel"
            >Complainant Name: <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="complainantNameUpdate"
              placeholder="Complainant Name"
              class="complaintsInput"
              required
            />
          </div>
        </div>
        <div>
          <label class="complaintsFormLabel"
            >Father's Name : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="fatherNameUpdate"
              placeholder="Father's Name"
              class="complaintsInput"
              required
            />
          </div>
        </div>
        <div>
          <label class="complaintsFormLabel"
            >Email ID: <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="complainantEmailUpdate"
              placeholder="Email"
              class="complaintsInput"
              required
            />
          </div>
        </div>
      </div>
      <div class="addressLine1andMobileDiv">
        <div class="complaintsAddressDiv">
          <label class="complaintsFormLabel"
            >Address Line 1 <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="addressUpdate"
              placeholder="Address Line 1"
              class="complaintsInput"
              required
            />
          </div>
        </div>
        <div class="complaintPhoneDiv">
          <label class="complaintsFormLabel"
            >Mobile Number. : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="mobileNoUpdate"
              placeholder="Phone Number"
              class="complaintsInput"
              required
            />
          </div>
        </div>
      </div>
      <div class="complaintsContentDivtopLeft contentDiv">
        <div class="complaintsAddressDiv">
          <label class="complaintsFormLabel">Address Line 2</label>
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="addressLine1Update"
              placeholder="Address Line 2"
              class="complaintsInput"
            />
          </div>
        </div>
        <div class="complaintPhoneDiv">
          <label class="complaintsFormLabel">Alternate Number. :</label>
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="alternateNumberUpdate"
              placeholder="Alternate Number"
              class="complaintsInput"
            />
          </div>
        </div>
      </div>
      <div class="cityandState">
        <div class="">
          <label class="complaintsFormLabel"
            >City : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="cityInputUpdate"
              placeholder="Complaint Number"
              class="complaintsInput"
              required
            />
          </div>
        </div>
        <div class="">
          <label class="complaintsFormLabel"
            >State : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="text"
              name=""
              id="stateInputUpdate"
              placeholder="Complaint Name"
              class="complaintsInput"
              value="HARYANA"
              disabled
              required
            />
          </div>
        </div>
      </div>

      <div class="rangeAndSP">
        <div class="">
          <label class="complaintsFormLabel"
            >Range : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <select
              name=""
              id="rangeInputUpdate"
              class="complaintsInput"
              required
            >
              <option value="">Select Range</option>
            </select>
          </div>
        </div>
        <div class="">
          <label class="complaintsFormLabel"
            >District : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <select
              name=""
              id="DistrictUpdate1"
              class="complaintsInput"
              required
            >
              <option value="">Select District</option>
            </select>
          </div>
        </div>

        <div>
          <label class="complaintsFormLabel"
            >Status : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <select
              name=""
              id="complainStatusUpdate"
              class="complaintsInput"
              required
            >
              <option value="PENDING">PENDING</option>
              <option value="IN-PROCESS">IN-PROCESS</option>
              <option value="DISPOSED">DISPOSED</option>
              <option value="OVERDUE">OVERDUE</option>
              <option value="REJECTED">REJECTED</option>
            </select>
          </div>
        </div>
      </div>
      <div class="complaintsText">
        <div class="">
          <label class="complaintsFormLabel"
            >Complaint Short Description
            <span class="required">*</span></label
          >
          <div class="complaintsTextArea">
            <textarea
              type="text"
              name=""
              id="shortDescriptionUpdate"
              placeholder="Complaint Short Description"
              class="p-2 mr-2 border-2 rounded w-full h-44"
              required
            ></textarea>
          </div>
        </div>
      </div>
      <div class="complaintsText bottomDiv">
        <div class="m-5 flex-1">
          <label class="complaintsFormLabel"
            >Update Deadline <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <input
              type="date"
              name=""
              id="deadlineUpdate"
              placeholder=""
              class="complaintsInput"
              required
            />
          </div>
        </div>
        <div class="highPriorityCheckDiv">
          <div class="complaintContnetDivLeftTop">
            <input
              type="checkbox"
              name=""
              id="highPriorityUpdate"
              placeholder="First Name"
              class="border-2 rounded h-5 w-5"
            />
          </div>
          <label class="text-xl">High Priority</label>
        </div>
      </div>
      <div class="specialDiv">
        <div>
          <label class="complaintsFormLabel"
            >Complaints Category : <span class="required">*</span></label
          >
          <div class="complaintContnetDivLeftTop">
            <select
              name=""
              id="complainCategoryUpdate"
              class="complaintsInput"
              required
            ></select>
          </div>
        </div>
        <div>
          <label class="complaintsFormLabel" for="sections"
            >ACT : <span class="required">*</span></label
          >
          <select
            name=""
            id="actUpdate"
            class="complaintsInput"
            required
          ></select>
        </div>
        <div>
          <label class="complaintsFormLabel">Sections :</label>
          <div class="complaintContnetDivLeftTop">
            <textarea
              name=""
              id="sectionUpdate"
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="filesDiv">
        <p>Upload Files</p>
        <div class="specialDivInner">
          <div class="complaintContnetDivLeftTop">
            <input
              type="file"
              name=""
              id="inputFilesUpdate"
              class="complaintsInput"
            />
            <div id="inputFilesText"></div>
          </div>
        </div>
      </div>
      <br />
      <input class="addButton" type="submit" value="Update Complain" />
    </div>
  </form>
</div>`;
};

const viewComplain = () => {
  return `<div class="updateComp">
        <div>
          <div class="upperDivAddComp">
            <h3 class="h3AddComp">View Complaints</h3>
            <div class="closeIconView">
              <div class="line1"></div>
              <div class="line2"></div>
            </div>
          </div>
        </div>
        <div class="divComplaints">
          <div class="complaintsContent">
            <div class="">
              <label class="complaintsFormLabel">Complaint Number: </label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="text"
                  name=""
                  id="complainantNumberView"
                  disabled
                  placeholder="Complaint Number"
                  class="complaintsInput"
                />
              </div>
            </div>
            <div>
              <label class="complaintsFormLabel">Complaint Name: </label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="text"
                  name=""
                  id="complainantNameView"
                  placeholder="Complaint Name"
                  class="complaintsInput"
                  disabled
                />
              </div>
            </div>
            <div>
              <label class="complaintsFormLabel">Father's Name : </label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="text"
                  name=""
                  id="fatherNameView"
                  placeholder="Father's Name"
                  class="complaintsInput"
                  disabled
                />
              </div>
            </div>
            <div>
              <label class="complaintsFormLabel">Email ID:</label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="text"
                  name=""
                  id="complainantEmailView"
                  placeholder="Email"
                  class="complaintsInput"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="addressLine1andMobileDiv">
            <div class="complaintsAddressDiv">
              <label class="complaintsFormLabel">Address Line 1</label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="text"
                  name=""
                  id="addressView"
                  placeholder="Address Line 1"
                  class="complaintsInput"
                  disabled
                />
              </div>
            </div>
            <div class="complaintPhoneDiv">
              <label class="complaintsFormLabel">Mobile Number. :</label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="text"
                  name=""
                  id="mobileNoView"
                  placeholder="Phone Number"
                  class="complaintsInput"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="complaintsContentDivtopLeft contentDiv">
            <div class="complaintsAddressDiv">
              <label class="complaintsFormLabel">Address Line 2</label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="text"
                  name=""
                  id="addressLine1View"
                  placeholder="Address Line 2"
                  class="complaintsInput"
                  disabled
                />
              </div>
            </div>
            <div class="complaintPhoneDiv">
              <label class="complaintsFormLabel">Alternate Number. :</label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="text"
                  name=""
                  id="alternateNumberView"
                  placeholder="Alternate Number"
                  class="complaintsInput"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="cityandState">
            <div class="">
              <label class="complaintsFormLabel">City :</label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="text"
                  name=""
                  id="cityInputView"
                  placeholder="Complaint Number"
                  class="complaintsInput"
                  disabled
                />
              </div>
            </div>
            <div class="">
              <label class="complaintsFormLabel">State :</label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="text"
                  name=""
                  id="stateInputView"
                  placeholder="Complaint Name"
                  class="complaintsInput"
                  value="HARYANA"
                  disabled
                />
              </div>
            </div>
          </div>

          <div class="rangeAndSP">
            <div class="">
              <label class="complaintsFormLabel">Range :</label>
              <div class="complaintContnetDivLeftTop">
                <select
                  name=""
                  id="rangeInputView1"
                  class="complaintsInput"
                  disabled
                >
                  <option value="">Select Range</option>
                </select>
              </div>
            </div>
            <div class="">
              <label class="complaintsFormLabel">District :</label>
              <div class="complaintContnetDivLeftTop">
                <select
                  name=""
                  id="DistrictView1"
                  class="complaintsInput"
                  disabled
                ></select>
              </div>
            </div>

            <div>
              <label class="complaintsFormLabel">Status :</label>
              <div class="complaintContnetDivLeftTop">
                <select
                  name=""
                  id="complainStatusView"
                  class="complaintsInput"
                  disabled
                >
                  <option value="PENDING">PENDING</option>
                  <option value="IN-PROCESS">IN-PROCESS</option>
                  <option value="DISPOSED">DISPOSED</option>
                  <option value="OVERDUE">OVERDUE</option>
                  <option value="REJECTED">REJECTED</option>
                </select>
              </div>
            </div>
          </div>
          <div class="complaintsText">
            <div class="">
              <label class="complaintsFormLabel"
                >Complaint Short Description
              </label>
              <div class="complaintsTextArea">
                <textarea
                  type="text"
                  name=""
                  id="shortDescriptionView"
                  disabled
                  placeholder="Complaint Short Description"
                  class="p-2 mr-2 border-2 rounded w-full h-44"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="complaintsText bottomDiv">
            <div class="m-5 flex-1">
              <label class="complaintsFormLabel">Date of Submission</label>
              <div class="complaintContnetDivLeftTop">
                <input
                  type="date"
                  name=""
                  id="deadlineView"
                  placeholder=""
                  class="complaintsInput"
                  disabled
                />
              </div>
            </div>
            
            <div class="highPriorityCheckDiv">
              <div class="complaintContnetDivLeftTop">
                <input
                  type="checkbox"
                  name=""
                  id="highPriorityView"
                  placeholder="First Name"
                  class="border-2 rounded h-5 w-5"
                  disabled
                />
              </div>
              <label class="text-xl">High Priority</label>
            </div>
          </div>
          

          <div class="specialDiv">
        <div>
          <label class="complaintsFormLabel"
            >Complaints Category : </label
          >
          <div class="complaintContnetDivLeftTop">
            <select
              name=""
              id="complainCategoryView"
              class="complaintsInput"
              disabled
            ></select>
          </div>
        </div>
        <div>
          <label class="complaintsFormLabel" for="sections"
            >ACT : </label
          >
          <select
            name=""
            id="actView"
            class="complaintsInput"
            disabled
            required
          ></select>
        </div>
        <div>
          <label class="complaintsFormLabel">Sections :</label>
          <div class="complaintContnetDivLeftTop">
            <textarea
              name=""
              id="sectionView"
              cols="30"
              rows="5"
              disabled
            ></textarea>
          </div>
        </div>
      </div>
        </div>
      </div>`;
};

const comments = () => {
  return `<div>
  <div class="upperDivAddComp">
    <h3 class="h3AddComp">Add Comments</h3>
    <div class="closeIconComment">
      <div class="line1"></div>
      <div class="line2"></div>
    </div>
  </div>
</div>
<div class="commentMainDiv">
  <div>
    <form id="commentForm" onsubmit="addComm(event)">
      <div class="innerTextDiv">
        <textarea
          name=""
          id="commentText"
          placeholder="Write Comment"
        ></textarea>
        <input
          type="submit"
          value="Post Comment"
          id="addComment"
          class="addButton"
        />
      </div>
    </form>
  </div>
  <div class="showComments"></div>
</div>`;
};
export { addComplain, updateComplain, viewComplain, comments };
