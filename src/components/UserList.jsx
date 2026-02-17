import { users } from "../data/users";
import UserCard from "./UserCard";

const UserList = () => {
  return (
    <div className="card-container">
      {users.map(({ id, name, role, status }) => (
        <UserCard
          key={id}
          name={name}
          role={role}
          status={status}
        />
      ))}
    </div>
  );
};

export default UserList;
