const USERS_KEY = "medlink_users";
const SESSION_KEY = "medlink_session";

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function registerUser({ name, email, password }) {
  const users = readUsers();
  const normalized = email.trim().toLowerCase();

  if (!name.trim() || !normalized || !password) {
    return { ok: false, message: "Please fill in all fields." };
  }

  if (password.length < 6) {
    return { ok: false, message: "Password must be at least 6 characters." };
  }

  if (users.some((user) => user.email === normalized)) {
    return { ok: false, message: "An account with this email already exists." };
  }

  const user = { name: name.trim(), email: normalized, password };
  users.push(user);
  writeUsers(users);
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ name: user.name, email: user.email })
  );

  return { ok: true, message: "Welcome to MedLink Community!", user };
}

export function loginUser({ email, password }) {
  const users = readUsers();
  const normalized = email.trim().toLowerCase();
  const user = users.find(
    (item) => item.email === normalized && item.password === password
  );

  if (!user) {
    return { ok: false, message: "Invalid email or password." };
  }

  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ name: user.name, email: user.email })
  );

  return { ok: true, message: `Welcome back, ${user.name}!`, user };
}
