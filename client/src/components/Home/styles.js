import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Info styles
  mainContainer: {
    display: "flex",
    width: "100vw",
    minHeight: "100vh",
    padding: "50px",
    boxSizing: "border-box",
  },

  titleContainer: {
    width: "40vw",
    margin: "auto",
  },

  title: {
    fontWeight: "700",
    fontSize: "5rem",
    marginLeft: "20px",
  },

  info: {
    fontWeight: "400",
    marginLeft: "20px",
    color: "#444444",
  },

  imageCointainer: {
    width: "60vw",
    margin: "auto",
  },

  image: {
    width: "100%",
  },

  // Footer styles
  footer: {
    fontSize: "1rem",
    padding: "70px 0 70px 50px",
  },

  // Colorbox styles
  loginContainer: {
    width: "40vw",
    padding: "50px",
    margin: "auto",
  },

  infoContainer: {
    width: "60vw",
    padding: "50px",
    margin: "auto",
  },

  blueContainer: {
    display: "flex",
    backgroundColor: "#6C63FF",
    width: "100vw",
  },

  blueTitle: {
    fontWeight: "700",
    fontSize: "4rem",
    textAlign: "center",
    color: "white",
  },

  blueInfo: {
    fontWeight: "400",
    textAlign: "center",
    fontSize: "1.1rem",
    color: "white",
  },

  whiteContainer: {
    display: "flex",
    width: "100vw",
  },

  whiteTitle: {
    fontWeight: "700",
    fontSize: "4rem",
    textAlign: "center",
    color: "black",
  },

  whiteInfo: {
    fontWeight: "400",
    fontSize: "1.1rem",
    textAlign: "center",
    color: "#444444",
  },
}));

export default useStyles;
