import { Typography } from "@material-ui/core";
import home from "../../images/home.png";
import useStyles from "./styles";

const Intro = () => {
  const classes = useStyles();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className={classes.mainContainer}
    >
      <div className={classes.titleContainer}>
        <Typography className={classes.title} variant="h1" gutterBottom>
          College ERP
        </Typography>
        <Typography className={classes.info} variant="h6">
          This web application is used as a college database management system.
          Using this, we can keep a database of a college and store info about
          the students, teachers and subjects. Students can talk with anyone on
          campus. Teachers can give attendance and provide marks to students on
          particular tests.
        </Typography>
      </div>
      <div className={classes.imageCointainer}>
        <img className={classes.image} src={home} alt="Home" />
      </div>
    </div>
  );
};

export default Intro;
