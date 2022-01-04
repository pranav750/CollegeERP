import { useState } from "react";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_STUDENTS,
  SET_LOADING,
} from "../../../store/constants/constants";
import { markAttendance } from "../../../store/action/teacher";
import useStyles from "./styles";

const Results = ({ form }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.data.students);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const rows = students.map((student) => ({
    id: student.registrationID,
    name: `${student.firstName} ${student.lastName}`,
  }));
  const columns = [
    {
      field: "id",
      headerName: "Registration ID",
      width: 210,
    },
    {
      field: "name",
      headerName: "Name",
      width: 210,
    },
  ];

  const submitHandler = () => {
    dispatch({ type: SET_LOADING });
    dispatch(
      markAttendance({
        date: form.date,
        subjectID: form.subjectID,
        studentIDs: selectedStudents,
      })
    );
  };

  const closeHandler = () => {
    dispatch({ type: CLEAR_STUDENTS });
  };

  return (
    <div>
      <div
        style={{ height: 380, color: "black", margin: "20px auto", width: 500 }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(selections) => {
            setSelectedStudents(selections);
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
