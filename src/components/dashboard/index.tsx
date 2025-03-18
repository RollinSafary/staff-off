import Calendar from "./components/Calendar";
import React from "react";
import RequestCards from "./components/requestCards";
export default function dashboard() {
  return (
    <div>
      <h1>Hello, Mushegh ! 👋</h1>
      <RequestCards />
      <Calendar />
    </div>
  );
}
