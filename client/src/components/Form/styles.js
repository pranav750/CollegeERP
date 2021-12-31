import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  // FormLayout styles
  mainContainer: {
    width: "100%",
  },

  paper: {
    padding: "40px",
  },

  titleImg: {
    width: "25%",
    marginBottom: "10px",
  },

  centerDiv: {
    textAlign: "center",
  },

  title: {
    fontWeight: "600",
  },

  // Submit and Close styles
  extraMargin: {
    marginBottom: "13px",
  },

  // ButtonGrp styles
  headingContainer: {
    textAlign: "center",
    color: "white",
    paddingBottom: "20px",
  },

  buttonGroupContainer: {
    textAlign: "center",
  },
}));

export default useStyles;
