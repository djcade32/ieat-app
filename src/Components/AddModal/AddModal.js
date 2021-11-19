import React from "react";

import "./AddModal.css";

function AddModal(props) {
  return <div className="add-modal-container">{props.children}</div>;
}

export default AddModal;
