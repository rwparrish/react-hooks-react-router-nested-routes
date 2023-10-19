import users from "../data";
import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar";

function Home() {
  
  const userList = users.map(user =><UserCard key={user.id} user={user}/>)

  return (
    <>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
    </>
  );
};

export default Home;