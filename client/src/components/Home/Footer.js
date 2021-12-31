import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className={classes.footer}>
      <Typography variant="subtitle1">Developed by :- Pranav Pandey</Typography>
    </div>
  );
};

export default Footer;
