import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt="complex"
              src="data:image/jpeg;base64,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"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                [HP] HP Pavilion 14-ce3600sa 14" Laptop - Intel® Core™ i3, 256
                GB, Silver
              </Typography>
              <Typography variant="body2" gutterBottom>
                laptop 93 place 8 cases Release Date: october 30, 2019
              </Typography>

              <Divider />

              <Typography variant="body2" color="textSecondary">
                Windows 10 Intel® Core™ i3-1005G1 Processor RAM: 8 GB / Storage:
                256 GB SSD Full HD screen Battery life: Up to 10.5 hour
              </Typography>
              <Divider />
            </Grid>
            {/* <Grid item>
              <Typography variant="body2" >
               
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">$19.00</Typography>
          <Typography variant="subtitle1">(1 in store)</Typography>
          <Button variant="outlined" size="large" color="primary">
            buy
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
