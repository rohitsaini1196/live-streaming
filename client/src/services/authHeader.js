export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("stract-user-token"));

  if (user) {
    return { "auth-token": user };
  } else {
    return {};
  }
}
