import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { MdOutlineCancel } from "react-icons/md";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap group-icons">
      <button id="wd-add-module-btn" className="btn btn-md btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <div className="dropdown d-inline me-2 float-end">
        <button id="wd-publish-all-btn" className="btn btn-md btn-secondary dropdown-toggle d-inline-flex align-items-center"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark/>
           Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items</a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only</a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
            <MdOutlineCancel className="fs-6" style={{marginRight:"5px"}} />
               Unpublish all modules and items</a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
            <MdOutlineCancel className="fs-6" style={{marginRight:"5px"}}/>
               Unpublish modules only</a>
          </li>
        </ul>
      </div>
      <button id="wd-view-progress" className="btn btn-md me-1 btn-secondary float-end position-relative me-2" style={{ bottom: "1px" }}>
        View Progress
      </button>
      <button id="wd-collapse-alls" className="btn btn-md me-1 btn-secondary float-end position-relative me-2" style={{ bottom: "1px" }}>
        Collapse All
      </button>
    </div>
);}
