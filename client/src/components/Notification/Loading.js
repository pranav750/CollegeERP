import { Backdrop, CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const Loading = () => {
  const classes = useStyles();
  const loading = useSelector((state) => state.profile.loading);

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <div className={classes.loading}>
        <CircularProgress style={{ color: "#6C63FF" }} />
        <Typography variant="subtitle1">Loading...</Typography>
      </div>
    </Backdrop>
  );
};

export default Loading;
