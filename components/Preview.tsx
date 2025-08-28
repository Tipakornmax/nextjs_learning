import React from 'react'
import "@/components/styles/tabledate.css";

export default function Preview() {
  const year = 2025;
  const month = 8; // กันยายน
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fre", "Sat"];

  const users = ["User A", "User B", "User C"];

  return (
    <div className="table-container">
      <table id="userTable">
        <thead>
          <tr id="headerRow">
            <th>Employee / Date</th>
            {Array.from({ length: daysInMonth }, (_, i) => {
              const d = i + 1;
              const date = new Date(year, month, d);
              return (
                <th key={d}>
                  {d}
                  <span className="day-name">{dayNames[date.getDay()]}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody id="tableBody">
          {users.map((user) => (
            <tr key={user}>
              <td>{user}</td>
              {Array.from({ length: daysInMonth }, (_, i) => (
                <td key={i}>{Math.floor(Math.random() * (9 - 4)) + 4} Hr</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
