// import { IoEllipsisVertical } from "react-icons/io5";
// import GreenCheckmark from "../Modules/GreenCheckmark";
// export default function QuizControlButtons() {
//   return (
//     <div className="float-end">
//       <GreenCheckmark />
//       <IoEllipsisVertical className="fs-4" />
//     </div>
// );}
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useState } from "react";

export default function QuizControlButtons() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="float-end position-relative">
      <GreenCheckmark />
      <IoEllipsisVertical
        className="fs-4"
        onClick={toggleDropdown}
        style={{ cursor: "pointer" }}
      />
      {showDropdown && (
        <ul className="dropdown-menu show position-absolute" style={{ right: 0 }}>
          <li className="dropdown-item" onClick={() => console.log("Edit clicked")}>
            Edit
          </li>
          <li className="dropdown-item" onClick={() => console.log("Delete clicked")}>
            Delete
          </li>
          <li className="dropdown-item" onClick={() => console.log("Publish clicked")}>
            Publish
          </li>
        </ul>
      )}
    </div>
  );
}
