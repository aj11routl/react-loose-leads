import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <center>
        <h1>Profile Page - User {params.profileId}</h1>
        <Link to="/">
          <button>Go back home</button>
        </Link>
      </center>
    </div>
  );
};

export default ProfilePage;
