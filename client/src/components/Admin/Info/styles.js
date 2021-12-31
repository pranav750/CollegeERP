import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  outside: {
    backgroundColor: "#6C63FF",
    minHeight: "100vh",
    padding: "50px",
  },

  mainContainer: {
    display: "flex",
    width: "70%",
    padding: "50px 40px",
    margin: "auto",
    borderRadius: "12px",
  },

  imageContainer: {
    width: "40%",
    textAlign: "center",
    margin: "auto 0",
  },

  infoContainer: {
    padding: "60px",
    width: "60%",
    textAlign: "center",
  },

  image: {
    marginBottom: "10px",
    width: "100%",
  },

  button: {
    color: "white",
    backgroundColor: "#f50057",
    marginTop: "40px",
    padding: "10px 20px",
    "&:hover": {
      color: "white",
      backgroundColor: "#f50057",
    },
  },
}));

export default useStyles;
