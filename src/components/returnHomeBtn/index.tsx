import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <div>
      <Link to={"/"}>
        <button className="font-thin flex items-center justify-center space-x-4">
          <span className="material-symbols-outlined">west</span>
          <p>Back to homepage</p>
        </button>
      </Link>
    </div>
  );
};

export default BackToHome;
