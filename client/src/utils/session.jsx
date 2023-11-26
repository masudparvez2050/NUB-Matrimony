// utils/cookie.js

export function setSessionCookie(token) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour
  const expires = `expires=${expirationDate.toUTCString()}`;
  document.cookie = `token=${token}; ${expires}; path=/; SameSite=Strict; Secure`;
}

export function setSessionCookieGender(gender) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour
  const expires = `expires=${expirationDate.toUTCString()}`;
  document.cookie = `gender=${gender}; ${expires}; path=/; SameSite=Strict; Secure`;
}

export function setSessionCookieUserid(userid) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour
  const expires = `expires=${expirationDate.toUTCString()}`;
  document.cookie = `userid=${userid}; ${expires}; path=/; SameSite=Strict; Secure`;
}

export function clearSessionCookie() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure`;
  }
}

// export function clearSessionCookie() {
//   document.cookie =
//     "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure";
//   document.cookie =
//     "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure";
//   document.cookie =
//     "userid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure";
// }
