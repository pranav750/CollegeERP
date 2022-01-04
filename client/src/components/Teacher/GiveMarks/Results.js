import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_STUDENTS,
  SET_LOADING,
} from "../../../store/constants/constants";
import { giveMarks } from "../../../store/action/teacher";
import useStyles from "./styles";

const Results = ({ form }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.data.students);
  let studentData = students.map((student) => ({
    studentID: student.registrationID,
    total: 0,
  }));
  const rows = students.map((student) => ({
    id: student.registrationID,
    name: `${student.firstName} ${student.lastName}`,
    total: 0,
    outOf: form.outOf,
  }));
  const columns = [
    {
      field: "id",
      headerName: "Registration ID",
      width: 150,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      width: 150,
      max: 60,
      editable: true,
    },
    {
      field: "outOf",
      headerName: "Out Of",
      type: "number",
      width: 150,
    },
  ];

  const submitHandler = () => {
    dispatch({ type: SET_LOADING });
    dispatch(
      giveMarks({
        test: form.test,
        subjectID: form.subjectID,
        outOf: form.outOf,
        studentData: studentData,
      })
    );
  };

  const closeHandler = () => {
    dispatch({ type: CLEAR_STUDENTS });
  };

  return (
    <div>
      <div
        style={{ height: 380, color: "black", margin: "20px auto", width: 600 }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onCellEditCommit={(row) => {
            studentData = studentData.map((student) => {
              if (student.studentID === row.id) {
                return {
                  studentID: student.studentID,
                  total: row.value,
                };
              } else {
                return student;
              }
            });
          }}
        />
      </div>
      <div className={classes.centerDiv}>
        <Button
          style={{
            backgroundColor: "#6C63FF",
            color: "white",
            marginRight: "10px",
          }}
          variant="contained"
          onClick={submitHandler}
        >
          Submit
        </Button>
        <Button
          style={{ backgroundColor: "white" }}
          variant="contained"
          onClick={closeHandler}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Results;
