function Header({ name, role }) {
  return (
    <div className="text-center">
      <img src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="profile" className="profile-img"/>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
export default Header;