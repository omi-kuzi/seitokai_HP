const calendarContainer = document.getElementById("calendar-container");
const eventList = document.getElementById("event-list");

fetch("events.json")
  .then(res => res.json())
  .then(events => drawCalendar(events))
  .catch(err => console.error("イベントの読み込みに失敗しました:", err));

function drawCalendar(events) {
  const firstDay = new Date(targetYear, targetMonth - 1, 1);
  const lastDay = new Date(targetYear, targetMonth, 0);
  const daysInMonth = lastDay.getDate();

  let html = `<table><thead><tr>
    <th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th>
  </tr></thead><tbody><tr>`;

  let weekday = firstDay.getDay();

  // 空白埋め
  for (let i = 0; i < weekday; i++) {
    html += "<td></td>";
  }

  for (let date = 1; date <= daysInMonth; date++) {
    const currentDate = `${targetYear}-${String(targetMonth).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const dayEvents = events.filter(e => e.date === currentDate);
    const tdClass = dayEvents.length > 0 ? "has-event" : "";

    html += `<td class="${tdClass}" data-date="${currentDate}">${date}</td>`;

    weekday++;
    if (weekday % 7 === 0 && date !== daysInMonth) {
      html += "</tr><tr>"; // 行を閉じて次の週へ
    }
  }

  // 残りの空白セル
  if (weekday % 7 !== 0) {
    const remaining = 7 - (weekday % 7);
    for (let i = 0; i < remaining; i++) {
      html += "<td></td>";
    }
  }

  html += "</tr></tbody></table>";
  calendarContainer.innerHTML = html;

  document.querySelectorAll(".has-event").forEach(td => {
    td.addEventListener("click", () => {
      const selectedDate = td.dataset.date;
      const dayEvents = events.filter(e => e.date === selectedDate);
      eventList.innerHTML = `<h2>${selectedDate} の予定</h2><ul>` +
        dayEvents.map(e => `<li>${e.title}</li>`).join("") + "</ul>";
    });
  });
}
