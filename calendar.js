document.addEventListener("DOMContentLoaded", function () {
  const calendarContainer = document.getElementById("calendar");
  const events = [
    { date: "2024-05-07", title: "委員会" },
    { date: "2024-05-14", title: "中間試験" },
    { date: "2024-05-15", title: "中間試験" },
    { date: "2024-05-16", title: "中間試験" },
    { date: "2024-06-06", title: "ベリタスプラザ" },
    { date: "2024-06-07", title: "ベリタスプラザ" },
    { date: "2024-06-25", title: "委員会" },
    { date: "2024-07-01", title: "期末試験" },
    { date: "2024-07-02", title: "期末試験" },
    { date: "2024-07-03", title: "期末試験" },
    { date: "2024-07-04", title: "期末試験" },
  ];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-11
  const date = new Date(year, month, 1);
  const firstDay = date.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const table = document.createElement("table");
  table.className = "calendar";

  const headerRow = document.createElement("tr");
  ["日", "月", "火", "水", "木", "金", "土"].forEach((day) => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  let row = document.createElement("tr");
  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  for (let d = 1; d <= daysInMonth; d++) {
    if ((firstDay + d - 1) % 7 === 0 && d !== 1) {
      table.appendChild(row);
      row = document.createElement("tr");
    }

    const cell = document.createElement("td");
    cell.textContent = d;

    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const matchingEvents = events.filter((event) => event.date === fullDate);
    if (matchingEvents.length > 0) {
      cell.classList.add("event");
      const eventList = document.createElement("ul");
      matchingEvents.forEach((event) => {
        const li = document.createElement("li");
        li.textContent = event.title;
        eventList.appendChild(li);
      });
      cell.appendChild(eventList);
    }

    row.appendChild(cell);
  }
  table.appendChild(row);
  calendarContainer.appendChild(table);
});
