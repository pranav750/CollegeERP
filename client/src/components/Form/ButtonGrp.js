import { ButtonGroup, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";

const ButtonGrp = ({
  operation,
  operationInfo,
  setButtonType,
  initialState,
  setForm,
}) => {
  const classes = useStyles();

  const whiteBackground = {
    backgroundColor: "white",
  };

  return (
    <div className={classes.buttonGroupContainer}>
      <div className={classes.headingContainer}>
        <Typography variant="h6">{operation}</Typography>
        <Typography variant="subtitle1">{operationInfo}</Typography>
      </div>

      <ButtonGroup variant="contained">
        <Button
          style={whiteBackground}
          onClick={() => {
            setButtonType("Admin");
            if (setForm)
              setForm((prevState) => ({
                ...initialState,
                type: "Admin",
              }));
          }}
        >
          Admin
        </Button>
        <Button
          style={whiteBackground}
          onClick={() => {
            setButtonType("Student");
            if (setForm)
              setForm((prevState) => ({
                ...initialState,
                type: "Student",
              }));
          }}
        >
          Student
        </Button>
        <Button
          style={whiteBackground}
          onClick={() => {
            setButtonType("Teacher");
            if (setForm)
              setForm((prevState) => ({
                ...initialState,
                type: "Teacher",
              }));
          }}
        >
          Teacher
        </Button>
        <Button
          style={whiteBackground}
          onClick={() => {
            setButtonType("Subject");
            if (setForm)
              setForm((prevState) => ({
                ...initialState,
                type: "Subject",
              }));
          }}
        >
          Subject
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGrp;
