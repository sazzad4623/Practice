import React from "react";
import { Row } from "reactstrap";
import "./header.css";
import WhatshotIcon from "@material-ui/icons/Whatshot";

function header() {
  return (
    <div className="header1 border shadow-sm bg-white">
      <Row>
        <div className="vl ml-4"></div>

        <h6>Products is a big shot?</h6>
        <div className="icon1">
          {" "}
          <a>
            <WhatshotIcon />
          </a>
        </div>
      </Row>
    </div>
  );
}

export default header;
