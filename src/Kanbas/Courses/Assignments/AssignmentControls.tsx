import { FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

export default function AssignmentControls(){
    return(
        <div id="wd-modules-controls" className="text-nowrap group-icons">
        <button id="wd-add-module-btn" className="btn btn-md btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
        </button>
        <button id="wd-view-progress" className="btn btn-md me-1 btn-secondary float-end position-relative me-2" style={{ bottom: "1px" }}>
            <GoPlus />
            Group
        </button>
        <div className="position-relative" style={{ display: 'inline-block', marginLeft:"15px" }}>
                <span className="position-absolute" style={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
                    <IoIosSearch />
                </span>
                <input 
                    type="text" 
                    id="wd-search-input" 
                    className="form-control ps-5 border border-secondary"  // ps-5 adds left padding
                    placeholder="Search..." 
                    style={{ width: '300px'}}
                />
            </div>
        </div>
    );
}