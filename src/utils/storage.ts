import type { IUser } from "../types";

const USER_LOCALSTORAGE_KEY = "breach_user";

// helper to get user from localstorage
export function getStoredUser(): IUser | null {
  const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
}

export function setStoredUser(user: IUser): void {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  window.dispatchEvent(new Event("storage"));
}
