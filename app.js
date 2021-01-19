const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

var admin;
var teacher;
var student;
var section;
var test;
var testMark = 0;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/collegeDB", {useNewUrlParser: true, useUnifiedTopology: true});

const subjectSchema = {
  subject: String,
  branch: String,
  year: String,
};

const adminSchema = {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
};

const studentSchema = {
  firstName: String,
  lastName: String,
  email: String,
  branch: String,
  contact: String,
  section: String,
  gender: String,
  year: String,
  password: String,
};

const teacherSchema = {
  firstName: String,
  lastName: String,
  email: String,
  branch: String,
  contact: String,
  gender: String,
  year: String,
  password: String,
};

const attendenceSchema = {
  date: String,
  subject: subjectSchema,
  student: studentSchema
}

const markSchema = {
  testName: String,
  testMarks: Number,
  total: Number,
  subject: subjectSchema,
  student: studentSchema
}

const Admin = mongoose.model('Admin', adminSchema);
const Student = mongoose.model("Student", studentSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);
const Subject = mongoose.model("Subject", subjectSchema);
const Attendence = mongoose.model("Attendence", attendenceSchema);
const Mark = mongoose.model("Mark", markSchema);


// Index page starts

app.get('/', function(req, res) {
  res.render("index");
});

// Index page ends


// Admin login starts

app.route("/admin-login")

.get(function(req, res) {
  res.render("admin-login", {message: ""});
})

.post(function(req, res) {

  Admin.findOne({email: req.body.email}, function(err, foundAdmin) {
    if (err) {
      console.log("Error in finding admin");
      res.render("admin-login", {message: "Error"});
    } else if (!foundAdmin) {
      console.log("Error in finding admin");
      res.render("admin-login", {message: "Email"});
    } else {
      if (req.body.password != foundAdmin.password) {
        console.log("Error in finding admin");
        res.render("admin-login", {message: "Password"});
      } else {
        admin = foundAdmin;
        console.log("Success in finding admin");
        res.render("admin-home", {admin: admin, data: foundAdmin});
      }
    }
  });

});

// Admin login ends


// Admin login leading to Admin home page starts

app.route("/admin-home")

.get(function(req, res) {
  res.render("admin-home", {admin: admin, data: admin});
})

.post(function(req, res) {
  admin = '';
  res.render("index");
});

// Admin login leading to Admin home page ends


// Adding admin starts

app.route("/add-admin")

.get(function(req, res) {
  res.render("add-admin", {admin: admin, message: ""});
})

.post(function(req, res) {

  if (admin.password != req.body.adminPassword) {
    console.log("Error in adding admin");
    res.render("add-admin", {admin: admin, message: "Admin Password"});
    return;
  }

  if (req.body.conPassword != req.body.password) {
    console.log("Error in adding admin");
    res.render("add-admin", {admin: admin, message: "Password"});
  } else {

    Admin.findOne({email: req.body.email}, function(err, foundAdmin) {
      if (err) {
        console.log("Error in adding admin");
        res.render("add-admin", {admin: admin, message: "Error"});
      } else if (!foundAdmin) {

        const newAdmin = new Admin({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        });

        newAdmin.save(function(err) {
          if (err) {
            console.log("Error in adding admin");
            res.render("add-admin", {admin: admin, message: "Error"});
          } else {
            console.log("Success in adding new admin");
            res.render("add-admin", {admin: admin, message: "Success"});
          }
        });

      } else {
        console.log("Error in adding admin");
        res.render("add-admin", {admin: admin, message: "Already"});
      }
    });

  }

});

// Adding admin ends


// Adding student starts

app.route("/add-student")

.get(function(req, res) {
  res.render("add-student", {admin: admin, message: ""});
})

.post(function(req, res) {

  if (admin.password != req.body.adminPassword) {
    console.log("Error in adding student");
    res.render("add-student", {admin: admin, message: "Admin Password"});
    return;
  }

  if (req.body.conPassword != req.body.password) {
    console.log("Error in adding student");
    res.render("add-student", {admin: admin, message: "Password"});
  } else {

    Student.findOne({email: req.body.email}, function(err, foundStudent) {
      if (err) {
        console.log("Error in adding student");
        res.render("add-student", {admin: admin, message: "Error"});
      } else if (!foundStudent) {

        const newStudent = new Student({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          branch: req.body.branch,
          contact: req.body.contact,
          section: req.body.section,
          gender: req.body.gender,
          year: req.body.year,
          password: req.body.password,
        });

        newStudent.save(function(err) {
          if (err) {
            console.log("Error in adding student");
            res.render("add-student", {admin: admin, message: "Error"});
          } else {
            console.log("Success in adding student");
            res.render("add-student", {admin: admin, message: "Success"});
          }
        });

      } else {
        console.log("Error in adding student");
        res.render("add-student", {admin: admin, message: "Already"});
      }
    });

  }

});

// Adding student ends


// Adding subject starts

app.route("/add-subject")

.get(function(req, res) {
  res.render("add-subject", {admin: admin, message: ""});
})

.post(function(req, res) {

  if (admin.password != req.body.adminPassword) {
    console.log("Error in adding subject");
    res.render("add-subject", {admin: admin, message: "Admin Password"});
    return;
  }

  Subject.findOne({subject: req.body.subject}, function(err, foundSubject) {
    if (err) {
      console.log("Error in adding subject");
      res.render("add-subject", {admin: admin, message: "Error"});
    } else if (!foundSubject) {

      const newSubject = new Subject({
        subject: req.body.subject,
        branch: req.body.branch,
        year: req.body.year
      });

      newSubject.save(function(err) {
        if (err) {
          console.log("Error in adding subject");
          res.render("add-subject", {admin: admin, message: "Error"});
        } else {
          console.log("Success in adding subject");
          res.render("add-subject", {admin: admin, message: "Success"});
        }
      });

    } else {
      console.log("Error in adding subject");
      res.render("add-subject", {admin: admin, message: "Already"});
    }
  });

});

// Adding subject ends



// Adding teacher starts

app.route("/add-teacher")

.get(function(req, res) {
  res.render("add-teacher", {admin: admin, message: ""});
})

.post(function(req, res) {

  if (admin.password != req.body.adminPassword) {
    console.log("Error in adding teacher");
    res.render("add-teacher", {admin: admin, message: "Admin Password"});
    return;
  }

  if (req.body.conPassword != req.body.password) {
    console.log("Error in adding teacher");
    res.render("add-teacher", {admin: admin, message: "Password"});
  } else {

    Teacher.findOne({email: req.body.email}, function(err, foundTeacher) {
      if (err) {
        console.log("Error in adding teacher");
        res.render("add-teacher", {admin: admin, message: "Error"});
      } else if (!foundTeacher) {

        const newTeacher = new Teacher({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          branch: req.body.branch,
          contact: req.body.contact,
          gender: req.body.gender,
          year: req.body.year,
          password: req.body.password,
        });

        newTeacher.save(function(err) {
          if (err) {
            console.log("Error in adding teacher");
            res.render("add-teacher", {admin: admin, message: "Error"});
          } else {
            console.log("Success in adding teacher");
            res.render("add-teacher", {admin: admin, message: "Success"});
          }
        });

      } else {
        console.log("Error in adding teacher");
        res.render("add-teacher", {admin: admin, message: "Already"});
      }
    });

  }

});

// Adding teacher ends


// Deleting student starts

app.route("/delete-student")

.get(function(req, res) {
  res.render("delete-student", {admin: admin, message: ""});
})

.post(function(req, res) {

  if(req.body.adminPassword !== admin.password) {
    console.log("Error in deleting student");
    res.render("delete-student", {admin: admin, message: "Error"});
    return;
  }

  Student.deleteOne({email: req.body.email}, function(err) {
    if (err) {
      console.log("Error in deleting student");
      res.render("delete-student", {admin: admin, message: "Error"});
    } else {
      console.log("Success in deleting student");
      res.render("delete-student", {admin: admin, message: "Success"});
    }
  });

});

// Deleting student ends


// Deleting teacher starts

app.route("/delete-teacher")

.get(function(req, res) {
  res.render("delete-teacher", {admin: admin, message: ""});
})

.post(function(req, res) {

  if(req.body.adminPassword !== admin.password) {
    console.log("Error in deleting teacher");
    res.render("delete-teacher", {admin: admin, message: "Error"});
    return;
  }

  Teacher.deleteOne({email: req.body.email}, function(err) {
    if (err) {
      console.log("Error in deleting teacher");
      res.render("delete-teacher", {admin: admin, message: "Error"});
    } else {
      console.log("Success in deleting teacher");
      res.render("delete-teacher", {admin: admin, message: "Success"});
    }
  });

});

// Deleting teacher ends


// Deleting admin starts

app.route("/delete-admin")

.get(function(req, res) {
  res.render("delete-admin", {admin: admin, message: ""});
})

.post(function(req, res) {

  if(req.body.adminPassword !== admin.password || req.body.email === admin.email) {
    console.log("Error in deleting admin");
    res.render("delete-admin", {admin: admin, message: "Error"});
    return;
  }

  Admin.deleteOne({email: req.body.email}, function(err) {
    if (err) {
      console.log("Error in deleting admin");
      res.render("delete-admin", {admin: admin, message: "Error"});
    } else {
      console.log("Success in deleting admin");
      res.render("delete-admin", {admin: admin, message: "Success"});
    }
  });

});

// Deleting admin ends


// Deleting subject starts

app.route("/delete-subject")

.get(function(req, res) {
  res.render("delete-subject", {admin: admin, message: ""});
})

.post(function(req, res) {

  if(req.body.adminPassword !== admin.password) {
    console.log("Error in deleting subject");
    res.render("delete-subject", {admin: admin, message: "Error"});
    return;
  }

  Subject.deleteOne({subject: req.body.subject}, function(err) {
    if (err) {
      console.log("Error in deleting subject");
      res.render("delete-subject", {admin: admin, message: "Error"});
    } else {
      console.log("Success in deleting subject");
      res.render("delete-subject", {admin: admin, message: "Success"});
    }
  });

});

// Deleting subject ends


// Deleting Attendence sheet starts

app.route("/delete-attendence")

.get(function(req, res) {
  res.render("delete-attendence", {admin: admin, message: ""});
})

.post(function(req, res) {

  if(req.body.adminPassword !== admin.password) {
    console.log("Error in deleting attendence");
    res.render("delete-attendence", {admin: admin, message: "Error"});
    return;
  }

  Attendence.deleteMany({'student.year': req.body.year}, function(err) {
    if (err) {
      console.log("Error in deleting attendence");
      res.render("delete-attendence", {admin: admin, message: "Error"});
    } else {
      console.log("Success in deleting attendence");
      res.render("delete-attendence", {admin: admin, message: "Success"});
    }
  });

});

// Deleting Attendence sheet ends


// Deleting Mark sheet starts

app.route("/delete-mark")

.get(function(req, res) {
  res.render("delete-mark", {admin: admin, message: ""});
})

.post(function(req, res) {

  if(req.body.adminPassword !== admin.password) {
    console.log("Error in deleting mark");
    res.render("delete-mark", {admin: admin, message: "Error"});
    return;
  }

  Mark.deleteMany({testName: req.body.test}, function(err) {
    if (err) {
      console.log("Error in deleting mark");
      res.render("delete-mark", {admin: admin, message: "Error"});
    } else {
      console.log("Success in deleting mark");
      res.render("delete-mark", {admin: admin, message: "Success"});
    }
  });

});

// Deleting Mark sheet ends


// Showing teachers starts

app.route("/teachers")

.get(function(req, res) {
  res.render("teachers", {admin: admin, message: "", data: []});
})

.post(function(req, res) {

  Teacher.find({branch: req.body.branch, year: req.body.year}, function(err, foundTeachers) {
    if (err || foundTeachers.length === 0) {
      console.log("Error in finding teachers list");
      res.render("teachers", {admin: admin, message: "Error", data: []})
    } else {
      console.log("Success in finding teachers list");
      res.render("teachers", {admin: admin, message: "Success", data: foundTeachers})
    }
  });

});

// Showing teachers ends


// Showing students starts

app.route("/students")

.get(function(req, res) {
  res.render("students", {admin: admin, message: "", data: []});
})

.post(function(req, res) {

  Student.find({branch: req.body.branch, section: req.body.section, year: req.body.year}, function(err, foundStudents) {
    if (err || foundStudents.length === 0) {
      console.log("Error in finding students list");
      res.render("students", {admin: admin, message: "Error", data: []})
    } else {
      console.log("Error in finding students list");
      res.render("students", {admin: admin, message: "Success", data: foundStudents})
    }
  });

});

// Showing students ends


// Showing subjects starts

app.route("/subjects")

.get(function(req, res) {
  res.render("subjects", {admin: admin, message: "", data: []});
})

.post(function(req, res) {

  Subject.find({branch: req.body.branch, year: req.body.year}, function(err, foundSubjects) {
    if (err || foundSubjects.length === 0) {
      console.log("Error in finding subjects list");
      res.render("subjects", {admin: admin, message: "Error", data: []})
    } else {
      console.log("Error in finding subjects list");
      res.render("subjects", {admin: admin, message: "Success", data: foundSubjects})
    }
  });

});

// Showing subjects ends


// Teachers login starts

app.route("/teacher-login")

.get(function(req, res) {
  res.render("teacher-login", {message: ""});
})

.post(function(req, res) {

  Teacher.findOne({email: req.body.email}, function(err, foundTeacher) {
    if (err) {
      console.log("Error in finding teacher");
      res.render("teacher-login", {message: "Error"});
    } else if (!foundTeacher) {
      console.log("Error in finding teacher");
      res.render("teacher-login", {message: "Email"});
    } else {
      if (req.body.password != foundTeacher.password) {
        console.log("Error in finding teacher");
        res.render("teacher-login", {message: "Password"});
      } else {
        teacher = foundTeacher;
        console.log("Success in finding teacher");
        res.render("teacher-home", {teacher: teacher, data: foundTeacher});
      }
    }
  });

});

// Teacher Login ends


// Teacher login leading to Teacher home page starts

app.route("/teacher-home")

.get(function(req, res) {
  res.render("teacher-home", {teacher: teacher, data: teacher});
})

.post(function(req, res) {
  teacher = "";
  res.render("index");
});

// Teacher login leading to Teacher home page ends


// Update teacher profile starts

app.route("/update-teacher")

.get(function(req, res) {
  res.render("update-teacher", {teacher: teacher, message: ""});
})

.post(function(req, res) {

  if (teacher.password != req.body.teacherPassword) {
    console.log("Error in updating teacher data");
    res.render("update-teacher", {teacher: teacher, message: "Teacher Password"});
    return;
  }

  let updatingData = {}

  Object.entries(req.body).forEach(function(entry) {
    if (entry[1] != "") {
      updatingData[entry[0]] = entry[1];
    }
  });

  Teacher.updateOne({email: teacher.email, password: teacher.password}, updatingData, function(err) {

    if (err) {
      console.log("Error in updating teacher data");
      res.render("update-teacher", {teacher: teacher, message: "Error"});
    } else {

      if (updatingData.email) {

        Teacher.findOne({email: updatingData.email, password: teacher.password}, function(err, foundTeacher) {
          if (err || !foundTeacher) {
            console.log("Error in updating teacher data");
            res.render("update-teacher", {teacher: teacher, message: "Error"});
          } else {
            console.log("Success in finding teacher data");
            teacher = foundTeacher;
            res.render("update-teacher", {teacher: teacher, message: "Success"});
          }

        });

      } else {

        Teacher.findOne({email: teacher.email, password: teacher.password}, function(err, foundTeacher) {
          if (err || !foundTeacher) {
            console.log("Error in updating teacher data");
            res.render("update-teacher", {teacher: teacher, message: "Error"});
          } else {
            console.log("Success in finding teacher data");
            teacher = foundTeacher;
            res.render("update-teacher", {teacher: teacher, message: "Success"});
          }
        });

      }

    }
  });

});

// Update teacher profile ends


// Attendence teacher starts

app.route("/attendence-teacher")

.get(function(req, res) {
  res.render("attendence-teacher", {teacher: teacher, message: "", data: []});
})

.post(function(req, res) {

  section = req.body.section;

  Student.find({branch: req.body.branch, section: req.body.section, year: req.body.year}, function(err, foundStudents) {
    if (err || foundStudents.length === 0) {
      console.log("Error in finding students list");
      res.render("attendence-teacher", {teacher: teacher, message: "Error", data: []})
    } else {
      console.log("Success in finding students list");
      res.render("attendence-teacher", {teacher: teacher, message: "Success", data: foundStudents})
    }
  });

});

app.post("/attendence-given", function(req, res) {

  Attendence.findOne({date: req.body.date, 'subject.subject': req.body.subject, 'subject.branch': teacher.branch, 'student.section': section, 'subject.year': teacher.year}, function(err, foundAttendence) {
    if (err) {
      console.log("Error in finding attendence");
      res.render("attendence-teacher", {teacher: teacher, message: "Error", data: []});
    } else if (!foundAttendence) {

      Subject.findOne({subject: req.body.subject, branch: teacher.branch, year: teacher.year}, function(err, foundSubject) {
        if (err || !foundSubject) {
          console.log("Error in finding subject");
          res.render("attendence-teacher", {teacher: teacher, message: "Error", data: []});
        } else {

          Object.entries(req.body).forEach(function(entry) {

            if (entry[1] == "true") {

              Student.findOne({email: entry[0]}, function(err, foundStudent) {
                if (err || !foundStudent) {
                  console.log("Error in finding student");
                  res.render("attendence-teacher", {teacher: teacher, message: "Error", data: []});
                } else {
                  const newAttendence = new Attendence({
                    date: req.body.date,
                    subject: foundSubject,
                    student: foundStudent
                  });

                  newAttendence.save(function(err) {
                    if (err) {
                      console.log("Error in saving attendence");
                      res.render("attendence-teacher", {teacher: teacher, message: "Error", data: []});
                    } else {
                      console.log("Success in saving attendence");
                    }
                  });
                }
              });
            }
          });
          res.render("attendence-teacher", {teacher: teacher, message: "Success", data: []});
        }
      });
    } else {
      console.log("Error in finding attendence");
      res.render("attendence-teacher", {teacher: teacher, message: "Already", data: []});
    }
  });

});

// Attendence teacher ends


// Upload marks of students starts

app.route("/marks-teacher")

.get(function(req, res) {
  res.render("marks-teacher", {teacher: teacher, message: "", data: [], testMark: 0});
})

.post(function(req, res) {

  test = req.body.test;

  if (test == "MST") {
    testMark = 20;
  } else if (test == "ESE") {
    testMark = 60;
  } else if (test == "TA") {
    testMark = 20;
  }

  Student.find({branch: req.body.branch, year: req.body.year}, function(err, foundStudents) {
    if (err || foundStudents.length === 0) {
      console.log("Error in finding students list");
      res.render("marks-teacher", {teacher: teacher, message: "Error", data: [], testMark: testMark})
    } else {
      console.log("Success in finding students list");
      res.render("marks-teacher", {teacher: teacher, message: "Success", data: foundStudents, testMark: testMark})
    }
  });

});

app.post("/marks-given", function(req, res) {

  Mark.findOne({testName: test, total: testMark, 'subject.subject': req.body.subject, 'subject.branch': teacher.branch, 'subject.year': teacher.year}, function(err, foundMark) {
    if (err) {
      console.log("Error in finding marks");
      res.render("marks-teacher", {teacher: teacher, message: "Error", data: [], testMark: testMark})
    } else if (!foundMark) {

      Subject.findOne({subject: req.body.subject, branch: teacher.branch, year: teacher.year}, function(err, foundSubject) {
        if (err || !foundSubject) {
          console.log("Error in finding marks");
          res.render("marks-teacher", {teacher: teacher, message: "Error", data: [], testMark: testMark});
        } else {

          Object.entries(req.body).forEach(function(entry) {

            if (entry[1] !== foundSubject.subject) {
              Student.findOne({email: entry[0]}, function(err, foundStudent) {
                if (err || !foundStudent) {
                  console.log("Error in finding marks");
                  res.render("marks-teacher", {teacher: teacher, message: "Error", data: [], testMark: testMark});
                } else {
                  const newMark = new Mark({
                    testName: test,
                    testMarks: entry[1],
                    total: testMark,
                    subject: foundSubject,
                    student: foundStudent
                  });

                  newMark.save(function(err) {
                    if (err) {
                      console.log("Error in saving marks");
                      res.render("marks-teacher", {teacher: teacher, message: "Error", data: [], testMark: testMark})
                    } else {
                      console.log("Success in saving marks");
                    }
                  });
                }

              });
            }

          });
          res.render("marks-teacher", {teacher: teacher, message: "Success", data: [], testMark: testMark});
        }
      });


    } else {
      console.log("Error in finding marks");
      res.render("marks-teacher", {teacher: teacher, message: "Already", data: [], testMark: testMark})
    }
  });

});

// Upload marks of students ends


// Updating password of teacher starts

app.route("/password-teacher")

.get(function(req, res) {
  res.render("password-teacher", {teacher: teacher, message: ""});
})

.post(function(req, res) {

  if (teacher.password != req.body.oldPassword) {
    console.log("Error in updating password");
    res.render("password-teacher", {teacher: teacher, message: "Old Password"});
    return;
  }

  if (req.body.conPassword != req.body.newPassword) {
    console.log("Error in updating password");
    res.render("password-teacher", {teacher: teacher, message: "Password"});
  } else {

    Teacher.updateOne({email: teacher.email, password: teacher.password}, {password: req.body.newPassword}, function (err) {
      if (err) {
        console.log("Error in updating password");
        res.render("password-teacher", {teacher: teacher, message: "Error"});
      } else {

        Teacher.findOne({email: teacher.email, password: req.body.newPassword}, function(err, foundTeacher) {
          if (err || !foundTeacher) {
            console.log("Error in updating password");
            res.render("password-teacher", {teacher: teacher, message: "Error"});
          } else {
            teacher = foundTeacher;
            console.log("Success in updating password");
            res.render("password-teacher", {teacher: teacher, message: "Success"});
          }
        });

      }

    });

  }

});

// Updating password of teacher ends


// Showing marksheet starts

app.route("/testmarks-teacher")

.get(function(req, res) {
  res.render("testmarks-teacher", {teacher: teacher, message: "", data: []});
})

.post(function(req, res) {

  Mark.find({testName: req.body.test, 'subject.subject': req.body.subject, 'student.branch': req.body.branch, 'student.section': req.body.section, 'student.year': req.body.year}, function(err, foundMarks) {
    if (err || foundMarks.length === 0) {
      console.log("Error in finding marks");
      res.render("testmarks-teacher", {teacher: teacher, message: "Error", data: []});
    } else {
      console.log("Success in finding marks");
      res.render("testmarks-teacher", {teacher: teacher, message: "Success", data: foundMarks});
    }
  });

});

// Showing marksheet ends


// Showing attendence starts

app.route("/totalattend-teacher")

.get(function(req, res) {
  res.render("totalattend-teacher", {teacher: teacher, message: "", data: []});
})

.post(function(req, res) {

  Attendence.find({date: req.body.date, 'subject.subject': req.body.subject, 'student.branch': req.body.branch, 'student.section': req.body.section, 'student.year': req.body.year}, function(err, foundAttendence) {
    if (err || foundAttendence.length === 0) {
      console.log("Error in finding attendence");
      res.render("totalattend-teacher", {teacher: teacher, message: "Error", data: []});
    } else {
      console.log("Success in finding attendence");
      res.render("totalattend-teacher", {teacher: teacher, message: "Success", data: foundAttendence});
    }
  });

});

// Showing attendence ends


// Student login starts

app.route("/student-login")

.get(function(req, res) {
  res.render("student-login", {message: ""});
})

.post(function(req, res) {

  Student.findOne({email: req.body.email}, function(err, foundStudent) {
    if (err) {
      console.log("Error in finding student");
      res.render("student-login", {message: "Error"});
    } else if (!foundStudent) {
      console.log("Error in finding student");
      res.render("student-login", {message: "Email"});
    } else {
      if (req.body.password != foundStudent.password) {
        console.log("Error in finding student");
        res.render("student-login", {message: "Password"});
      } else {
        student = foundStudent;
        console.log("Success in finding student");
        res.render("student-home", {student: student, data: foundStudent});
      }
    }
  });

});

// Student login ends


// Student home starts

app.route("/student-home")

.get(function(req, res) {
  res.render("student-home", {student: student, data: student});
})

.post(function(req, res) {
  student = "";
  res.render("index");
});

// Student home ends


// Update student profile starts

app.route("/update-student")

.get(function(req, res) {
  res.render("update-student", {student: student, message: ""});
})

.post(function(req, res) {

  if (student.password != req.body.studentPassword) {
    console.log("Error in updating student data");
    res.render("update-student", {student: student, message: "Student Password"});
    return;
  }

  let updatingData = {}

  Object.entries(req.body).forEach(function(entry) {
    if (entry[1] != "") {
      updatingData[entry[0]] = entry[1];
    }
  });

  Student.updateOne({email: student.email, password: student.password}, updatingData, function(err) {

    if (err) {
      console.log("Error in updating student data");
      res.render("update-student", {student: student, message: "Error"});
    } else {

      if (updatingData.email) {

        Student.findOne({email: updatingData.email, password: student.password}, function(err, foundStudent) {
          if (err || !foundStudent) {
            console.log("Error in finding student data");
            res.render("update-student", {student: student, message: "Error"});
          } else {
            console.log("Success in updating student data");
            student = foundStudent;
            res.render("update-student", {student: student, message: "Success"});
          }

        });

      } else {

        Student.findOne({email: student.email, password: student.password}, function(err, foundStudent) {
          if (err || !foundStudent) {
            console.log("Error in finding student data");
            res.render("index");
          } else {
            console.log("Success in updating student data");
            student = foundStudent;
            res.render("update-student", {student: student, message: "Success"});
          }

        });

      }

    }
  });

});

// Update teacher profile ends


// Updating password of teacher starts

app.route("/password-student")

.get(function(req, res) {
  res.render("password-student", {student: student, message: ""});
})

.post(function(req, res) {

  if (student.password != req.body.oldPassword) {
    console.log("Error in updating password");
    res.render("password-student", {student: student, message: "Old Password"});
    return;
  }

  if (req.body.conPassword != req.body.newPassword) {
    console.log("Error in updating password");
    res.render("password-student", {student: student, message: "Password"});
  } else {

    Student.updateOne({email: student.email, password: student.password}, {password: req.body.newPassword}, function (err) {
      if (err) {
        console.log("Error in updating password");
        res.render("password-student", {student: student, message: "Error"});
      } else {

        Student.findOne({email: student.email, password: req.body.newPassword}, function(err, foundStudent) {
          if (err || !foundStudent) {
            console.log("Error in updating password");
            res.render("password-student", {student: student, message: "Error"});
          } else {
            student = foundStudent;
            console.log("Success in updating password");
            res.render("password-student", {student: student, message: "Success"});
          }
        });

      }

    });

  }

});

// Updating password of teacher ends


// Showing marks of student starts

app.route("/marks-student")

.get(function(req, res) {
  res.render("marks-student", {student: student, message: "", data: []});
})

.post(function(req, res) {

  Mark.find({testName: req.body.test, 'subject.subject': req.body.subject, 'student.email': student.email, 'student.branch': student.branch, 'student.section': student.section, 'student.year': student.year}, function(err, foundMarks) {
    if (err || foundMarks.length === 0) {
      console.log("Error in finding the marks");
      res.render("marks-student", {student: student, message: "Error", data: []});
    } else {
      console.log("Success in finding the marks");
      res.render("marks-student", {student: student, message: "Success", data: foundMarks});
    }
  });

});

// Showing marks of student ends


// Showing subject of student starts

app.get("/subjects-student", function(req, res) {

  Subject.find({branch: student.branch, year: student.year}, function(err, foundSubjects) {
    if (err || foundSubjects.length === 0) {
      console.log("Error in finding subjects")
      res.render("subjects-student", {student: student, data: []});
    } else {
      console.log("Success in finding subjects")
      res.render("subjects-student", {student: student, data: foundSubjects});
    }
  })

});

// Showing subject of student ends


// Showing attendence of student starts

app.route("/attendence-student")

.get(function(req, res) {
  res.render("attendence-student", {student: student, message: "", data: {}});
})

.post(function(req, res) {

  Attendence.findOne({date: req.body.date, 'subject.subject':req.body.subject, 'student.email': student.email, 'student.branch': student.branch, 'student.section': student.section, 'student.year': student.year}, function(err, foundAttendence) {
    if (err || !foundAttendence) {
      console.log("Error in finding the marks");
      res.render("attendence-student", {student: student, message: "Error", data: {}});
    } else {
      console.log("Success in finding the marks");
      res.render("attendence-student", {student: student, message: "Success", data: foundAttendence});
    }
  });

});

// Showing attendence of student ends


app.listen("3000", function () {
  console.log("Server listening on port 3000");
});
