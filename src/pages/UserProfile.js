import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function UserProfile() {
  const params = useParams();

  const users = useOutletContext();

  const user = users.find(user => user.id === parseInt(params.id));

  return(
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

export default UserProfile;