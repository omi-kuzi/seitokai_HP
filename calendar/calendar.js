const calendarContainer = document.getElementById("calendar");
const eventList = document.getElementById("event-list");

// 表示する年月（あとで切り替え対応可能）
const targetYear = 2025;
const targetMonth = 5; // 5月（0始まりではない）

// カレンダーを描画
function drawCalendar(events) {
  const firstDay = new Date(targetYear, targetMonth - 1, 1);
  const lastDay = new Date(targetYear, targetMonth, 0);
  const daysInMonth = lastDay.getDate();

  let html = `<table><thead><tr>
    <th>日</th><th>月</th><th>火</th><th>水</th>
    <th>木</th><th>金</th><th>土</th>
  </tr></thead><tbody><tr>`;

  let weekday = firstDay.getDay();
  for (let i = 0; i < weekday; i++) html += "<td></td>";

  for (let date = 1; date <= daysInMonth; date++) {
    const currentDate = `${targetYear}-${String(targetMonth).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const dayEvents = events.filter(e => e.date === currentDate);

    let tdClass = dayEvents.length > 0 ? "has-event" : "";
    html += `<td class="${tdClass}" data-date="${currentDate}">${date}</td>`;

    if ((weekday + date) % 7 === 0) html += "</tr><tr>";
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

// JSONを読み込む
fetch("calendar/schedule.json")
  .then(res => res.json())
  .then(data => {
    drawCalendar(data.events);
  });
