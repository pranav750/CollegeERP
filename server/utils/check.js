export const nameCheck = (name, type) => {
  if (type !== "Subject") {
    if (name.includes(" ")) return `${type} name should not contain spaces`;
  }

  if (name.length < 2) return `${type} name cannot be of ${name.length} length`;

  return false;
};

export const passwordCheck = (password) => {
  if (password.includes(" ")) return "Password should not contain any spaces";

  if (password.length < 8)
    return "Password length should be at least 8 characters long";

  if (password[0] !== password[0].toUpperCase())
    return "Password should contain first letter as capital";

  return false;
};

export const aadharCheck = (aadhar) => {
  if (aadhar.length !== 12) return "Aadhar number is invalid";

  for (let i = 0; i < aadhar.length; i++) {
    if (!(aadhar[i] >= "0" && aadhar[i] <= "9"))
      return "Aadhar should only contain numbers";
  }

  return false;
};

export const emailCheck = (email) => {
  if (email.includes(" ")) return "Email should not contain spaces";

  if (email.length < 3) return "Email is invalid";

  if (!email.includes("@")) return "Email should contain @";

  if (!email.includes(".")) return "Email should contain .";

  if (!(email[0] >= "a" && email[0] <= "z"))
    return "Email should start with lowercase alphabet";

  if (email[email.length - 1] === ".")
    return "Email should have something after .";

  if (email.includes("@."))
    return "Email should contain something between @ and .";

  return false;
};

export const mobileCheck = (mobile) => {
  if (mobile.length !== 10) return "Mobile number is invalid";

  for (let i = 0; i < mobile.length; i++)
    if (!(mobile[i] >= "0" && mobile[i] <= "9"))
      return "Mobile number should only contain numbers";

  return false;
};

export const yearCheck = (year) => {
  if (year === 0) return "Year cannot be 0";

  return false;
};

export const semesterCheck = (year, semester) => {
  if (semester === 0) return "Semester cannot be 0";

  if (semester !== 2 * year && semester !== 2 * year - 1)
    return `${semester}th Semester is not in ${year}th Year`;

  return false;
};

export const departmentCheck = (department) => {
  switch (department) {
    case "Computer Science":
      return false;

    case "Information Technology":
      return false;

    case "Electronics And Telecommunication":
      return false;

    case "Electronics":
      return false;

    case "Electrical":
      return false;

    case "Production":
      return false;

    case "Civil":
      return false;

    case "Textile":
      return false;

    case "Chemical":
      return false;

    default:
      return "No Department Found";
  }
};
