import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="./Home">Home</Link> &nbsp;
      <Link to="./FacultyName">FacultyName</Link> &nbsp;
      <Link to="./ContactUs">ContactUs</Link> &nbsp;
    </>
  );
}

export default Header;
