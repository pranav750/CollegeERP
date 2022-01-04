import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: "flex",
    width: "60%",
    padding: "50px 40px",
    margin: "auto",
    borderRadius: "12px",
  },

  main: {
    width: "100%",
  },

  titleImg: {
    width: "25%",
    marginBottom: "10px",
  },

  centerDiv: {
    textAlign: "center",
  },

  paper: {
    padding: "40px",
  },

  title: {
    fontWeight: "600",
  },
}));

export default useStyles;
