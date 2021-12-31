import { Button } from "@material-ui/core";

const Submit = ({ name }) => {
  return (
    <Button
      type="submit"
      style={{
        backgroundColor: "#6C63FF",
        color: "white",
        marginRight: "10px",
      }}
      variant="contained"
    >
      {name}
    </Button>
  );
};

export default Submit;
