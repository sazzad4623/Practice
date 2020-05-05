import React from "react";
import { Row } from "reactstrap";

import { Divider } from "@material-ui/core";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import ToggleButton from "@material-ui/lab/ToggleButton";
import AppsIcon from "@material-ui/icons/Apps";
import ListIcon from "@material-ui/icons/List";
import ImageIcon from "@material-ui/icons/Image";

function Navbar2() {
  return (
    <div>
      <Row>
        <h2 className="danger">1372</h2>
        {/* <NavbarText>products</NavbarText> */}

        <p className="m-1">Display 1 to 40</p>
        <Pagination
          size="sm"
          aria-label="Page navigation example"
          className="m-1 pt-3"
        >
          <PaginationItem className="m-1">
            <PaginationLink previous href="#" />
          </PaginationItem>

          <PaginationItem className="m-1">
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>

        <Divider orientation="vertical" flexItem className="m-1" />

        <ToggleButton className="ml-2 h-25 text-primary" value="check">
          <ListIcon />
          List View
        </ToggleButton>
        <ToggleButton value="check" className="h-25 text-primary">
          <ImageIcon />
          Image Display
        </ToggleButton>
        <ToggleButton value="check" className="h-25 text-primary">
          <AppsIcon />
          Detail View
        </ToggleButton>
      </Row>
    </div>
  );
}

export default Navbar2;
