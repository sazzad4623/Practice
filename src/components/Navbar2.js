import React from "react";
import { Row } from "reactstrap";

import { Divider } from "@material-ui/core";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import ToggleButton from "@material-ui/lab/ToggleButton";
import AppsIcon from "@material-ui/icons/Apps";
import ListIcon from "@material-ui/icons/List";
import ImageIcon from "@material-ui/icons/Image";

function Navbar2() {
  const mystyle = {
    height: "50px",
  };
  const mystyle2 = {
    color: "#001789",
  };

  return (
    <div>
      <Row>
        <div className="pl-3 pt-1">
          <h2>1372</h2>{" "}
        </div>
        <div className="pl-1 pt-3">
          <p>Products</p>
        </div>
        <div>
          <p className="pl-1 pt-3">Display 1 to 40</p>
        </div>
        <diV className="pb-1">
          <Pagination
            size="sm"
            aria-label="Page navigation example"
            className="m-2"
          >
            <PaginationItem className="m-1">
              <PaginationLink previous href="#" />
            </PaginationItem>

            <PaginationItem className="m-1">
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
        </diV>

        <Divider
          style={mystyle}
          orientation="vertical"
          flexItem
          className="m-1"
        />

        <ToggleButton style={mystyle2} className="mt-3 ml-2 h-25" value="check">
          <ListIcon />
          List View
        </ToggleButton>
        <ToggleButton style={mystyle2} value="check" className="mt-3 h-25">
          <ImageIcon />
          Image Display
        </ToggleButton>
        <ToggleButton style={mystyle2} value="check" className="mt-3 h-25">
          <AppsIcon />
          Detail View
        </ToggleButton>
      </Row>
    </div>
  );
}

export default Navbar2;
