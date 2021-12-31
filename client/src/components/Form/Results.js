import { Fragment } from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const Results = () => {
  const adminData = useSelector((state) => state.data.admin);
  const studentData = useSelector((state) => state.data.student);
  const teacherData = useSelector((state) => state.data.teacher);
  const subjectData = useSelector((state) => state.data.subject);
  const admins = useSelector((state) => state.data.admins);
  const students = useSelector((state) => state.data.students);
  const teachers = useSelector((state) => state.data.teachers);
  const subjects = useSelector((state) => state.data.subjects);

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {adminData && (
            <Fragment>
              <TableRow>
                <TableCell scope="row" align="center">
                  Registration ID
                </TableCell>
                <TableCell scope="row" align="center">
                  {adminData.registrationID}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Name
                </TableCell>
                <TableCell scope="row" align="center">
                  {adminData.firstName} {adminData.lastName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Email
                </TableCell>
                <TableCell scope="row" align="center">
                  {adminData.email}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Aadhar
                </TableCell>
                <TableCell scope="row" align="center">
                  {adminData.aadhar}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Mobile
                </TableCell>
                <TableCell scope="row" align="center">
                  {adminData.mobile}
                </TableCell>
              </TableRow>
            </Fragment>
          )}

          {studentData && (
            <Fragment>
              <TableRow>
                <TableCell scope="row" align="center">
                  Registration ID
                </TableCell>
                <TableCell scope="row" align="center">
                  {studentData.registrationID}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Name
                </TableCell>
                <TableCell scope="row" align="center">
                  {studentData.firstName} {studentData.lastName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Email
                </TableCell>
                <TableCell scope="row" align="center">
                  {studentData.email}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Department
                </TableCell>
                <TableCell scope="row" align="center">
                  {studentData.department}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Aadhar
                </TableCell>
                <TableCell scope="row" align="center">
                  {studentData.aadhar}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Mobile
                </TableCell>
                <TableCell scope="row" align="center">
                  {studentData.mobile}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Year
                </TableCell>
                <TableCell scope="row" align="center">
                  {studentData.year}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Semester
                </TableCell>
                <TableCell scope="row" align="center">
                  {studentData.semester}
                </TableCell>
              </TableRow>
            </Fragment>
          )}

          {teacherData && (
            <Fragment>
              <TableRow>
                <TableCell scope="row" align="center">
                  Registration ID
                </TableCell>
                <TableCell scope="row" align="center">
                  {teacherData.registrationID}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Name
                </TableCell>
                <TableCell scope="row" align="center">
                  {teacherData.firstName} {teacherData.lastName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Email
                </TableCell>
                <TableCell scope="row" align="center">
                  {teacherData.email}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Department
                </TableCell>
                <TableCell scope="row" align="center">
                  {teacherData.department}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Aadhar
                </TableCell>
                <TableCell scope="row" align="center">
                  {teacherData.aadhar}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Mobile
                </TableCell>
                <TableCell scope="row" align="center">
                  {teacherData.mobile}
                </TableCell>
              </TableRow>
            </Fragment>
          )}

          {subjectData && (
            <Fragment>
              <TableRow>
                <TableCell scope="row" align="center">
                  Registration ID
                </TableCell>
                <TableCell scope="row" align="center">
                  {subjectData.registrationID}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Name
                </TableCell>
                <TableCell scope="row" align="center">
                  {subjectData.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Department
                </TableCell>
                <TableCell scope="row" align="center">
                  {subjectData.department}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Year
                </TableCell>
                <TableCell scope="row" align="center">
                  {subjectData.year}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" align="center">
                  Semester
                </TableCell>
                <TableCell scope="row" align="center">
                  {subjectData.semester}
                </TableCell>
              </TableRow>
            </Fragment>
          )}

          {admins.map((admin) => (
            <TableRow key={admin._id}>
              <TableCell align="center">{`${admin.firstName} ${admin.lastName}`}</TableCell>
              <TableCell align="center">{admin.registrationID}</TableCell>
            </TableRow>
          ))}
          {students.map((student) => (
            <TableRow key={student._id}>
              <TableCell align="center">{`${student.firstName} ${student.lastName}`}</TableCell>
              <TableCell align="center">{student.registrationID}</TableCell>
            </TableRow>
          ))}
          {teachers.map((teacher) => (
            <TableRow key={teacher._id}>
              <TableCell align="center">{`${teacher.firstName} ${teacher.lastName}`}</TableCell>
              <TableCell align="center">{teacher.registrationID}</TableCell>
            </TableRow>
          ))}
          {subjects.map((subject) => (
            <TableRow key={subject._id}>
              <TableCell align="center">{subject.name}</TableCell>
              <TableCell align="center">{subject.registrationID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Results;
