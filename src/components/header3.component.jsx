import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import NativeSelect from "@material-ui/core/NativeSelect";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";

const useStyles = makeStyles((theme) => ({
  titleBar: {
    background: "#E9E9E9",
    borderRadius: "2px",
    height: "53px",
    marginBottom: "10px",
    boxShadow: "1px 1px #EAEAEA",
  },

  divider1: {
    height: "53px",
  },
}));
const ProductsSortingHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.titleBar}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Search results for "pc"Show 7,086,652 cases 1-40
          </Typography>
        </Grid>

        <Grid item>
          <p className="pt-1">Display Order:</p>{" "}
        </Grid>

        <Grid item>
          {" "}
          <div className="pl-2">
            <NativeSelect id="select">
              <option disabled selected>
                none
              </option>
              <option value="10">Ten</option>
              <option value="20">Twenty</option>
            </NativeSelect>
          </div>
        </Grid>

        <Divider className={classes.divider1} orientation="vertical" flexItem />
        <Grid item>
          <p className="pt-1">Display:</p>
        </Grid>
        <Grid item>
          <ToggleButton>
            <CheckIcon />
          </ToggleButton>
          <ToggleButton>
            <CheckIcon />
          </ToggleButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsSortingHeader;
