import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Close = ({ name, path }) => {
  return (
    <Button
      style={{ backgroundColor: "white" }}
      variant="contained"
      component={Link}
      to={path}
    >
      {name}
    </Button>
  );
};

export default Close;
