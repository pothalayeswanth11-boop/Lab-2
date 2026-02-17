const UserCard = ({ name, role, status }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <span className={status === "Active" ? "active" : "inactive"}>
        {status}
      </span>
    </div>
  );
};

export default UserCard;
