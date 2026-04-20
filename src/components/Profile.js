function Profile({ email }) {
  return (
    <div className="card p-3">
      <h5>Contact</h5>
      <p>{email}</p>
    </div>
  );
}
export default Profile;