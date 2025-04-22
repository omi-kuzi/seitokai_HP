const calendarEl = document.getElementById("calendar");
const monthLabel = document.getElementById("monthLabel");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

let currentDate = new Date();

const events = {
  "2025-05-07": "委員会",
  "2025-05-14": "中間試験",
  "2025-05-15": "中間試験",
  "2025-05-16": "中間試験",
  "2025-06-06": "文化祭",
  "2025-06-07": "文化祭",
  "2025-06-25": "委員会",
  "2025-07-01": "期末試験",
  "2025-07-02": "期末試験",
  "2025-07-03": "期末試験",
  "2025-07-04": "期末試験",
  "2025-08-29": "始業式",
  "2025-09-03": "委員会",
  "2025-10-01": "委員会",
  "2025-10-03": "体育祭",
  "2025-10-15": "中間試験",
  "2025-10-16": "中間試験",
  "2025-10-17": "中間試験",
  "2025-10-29": "全校集会",
  "2025-11-05": "委員会",
  "2025-11-26": "クリスマスツリーの下で",
  "2025-12-03": "期末試験",
  "2025-12-04": "期末試験",
  "2025-12-05": "期末試験",
  "2025-12-08": "期末試験",
  "2025-12-09": "スポーツデイ",
  "2025-12-10": "委員会",
  "2025-12-24": "降誕祭",
  "2026-01-07": "委員会",
  "2026-01-14": "学年集会",
  "2026-01-28": "委員会",
  "2026-01-29": "マラソン大会",
  "2026-02-18": "全校集会",
  "2026-02-25": "委員会",
  "2026-03-09": "期末試験",
  "2026-03-10": "期末試験",
  "2026-03-11": "期末試験",
  "2026-03-12": "期末試験",
  "2026-03-19": "期末試験"
};

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthLabel.textContent = `${year}年${month + 1}月`;

  let html = "<table><thead><tr>";
  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
  weekDays.forEach(d => html += `<th>${d}</th>`);
  html += "</tr></thead><tbody><tr>";

  for (let i = 0; i < firstDay; i++) {
    html += "<td></td>";
  }

  for (let day = 1; day <= lastDate; day++) {
    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const isEvent = events[fullDate];
    const cellClass = isEvent ? "event" : "";

    html += `<td class="${cellClass}">${day}`;
    if (isEvent) {
      html += `<div class="event-label">${events[fullDate]}</div>`;
    }
    html += "</td>";

    if ((firstDay + day) % 7 === 0) html += "</tr><tr>";
  }

  html += "</tr></tbody></table>";
  calendarEl.innerHTML = html;
}

prevBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
};

nextBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
};

renderCalendar(currentDate);
