import { Grid, Paper, Typography } from "@material-ui/core";
import { getImage } from "../../utils/helper";
import useStyles from "./styles";

const FormLayout = (props) => {
  const classes = useStyles();
  const image = getImage(props.user);

  return (
    <Grid className={classes.mainContainer}>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.centerDiv}>
          <img className={classes.titleImg} src={image} alt={props.user} />
          <Typography className={classes.title} variant="h5" gutterBottom>
            {props.user}
          </Typography>
        </div>

        {props.children}
      </Paper>
    </Grid>
  );
};

export default FormLayout;
