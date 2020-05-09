import React from "react";
import "./header2.css";
import { Divider } from "@material-ui/core";

function header2() {
  return (
    // <div className="table1 m-3">
    //   {" "}
    <table class=" table table-bordered m-4 w-75">
      <tr>
        <span className="ml-1">hihihihihihihihi</span>
        <span className="ml-4">help me for styling 2 </span>

        <span>
          {" "}
          <select className="select1 selectpicker w-25">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </select>
        </span>
      </tr>
    </table>
    // </div>
  );
}

export default header2;
