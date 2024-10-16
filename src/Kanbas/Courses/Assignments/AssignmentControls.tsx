import { FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

export default function AssignmentControls() {
    return (
      <div id="wd-modules-controls" className="text-nowrap">
        <button
          id="wd-add-module-btn"
          className="btn btn-md btn-danger me-1 float-end"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
        <button
          id="wd-add-module-btn"
          className="btn btn-md btn-secondary me-1 float-end"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        
      </div>
    );
  }