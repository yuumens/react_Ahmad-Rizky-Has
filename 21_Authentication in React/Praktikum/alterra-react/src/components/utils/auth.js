class auth {
  static isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
  }
  static login() {
    localStorage.setItem("isLoggedIn", "true");
  }
  static logout() {
    localStorage.setItem("isLoggedIn", "false");
  }
}

export default auth;
