// 現在の年月を保持
let currentDate = new Date();
let events = {
  "2025-05-07": {
    title: "委員会",
    details: "委員会の詳細情報"
  },
  "2025-05-14": {
    title: "中間試験",
    details: "中間試験の詳細情報"
  },
  "2025-06-06": {
    title: "文化祭",
    details: "ベリタスプラザでの文化祭"
  },
  "2025-06-25": {
    title: "委員会",
    details: "委員会の詳細情報"
  },
  "2025-07-01": {
    title: "期末試験",
    details: "期末試験の詳細情報"
  }
};

// 月のカレンダーを描画
function renderCalendar() {
  const calendarElement = document.getElementById('calendar');
  const monthLabel = document.getElementById('monthLabel');

  // 現在表示している月を取得
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 月のラベルを表示
  monthLabel.textContent = `${year}年 ${month + 1}月`;

  // 月の初日と最終日を取得
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  
  // カレンダーをリセット
  calendarElement.innerHTML = '';

  // 月初日の曜日を取得
  const firstDayOfWeek = firstDay.getDay();

  // 最初の空白を挿入（前月からの余白）
  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('day');
    calendarElement.appendChild(emptyCell);
  }

  // 月の日数分、日付を追加
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    dayElement.dataset.date = dateString;

    // イベントがある日付は強調
    if (events[dateString]) {
      dayElement.style.backgroundColor = '#ffcccb';
    }

    dayElement.addEventListener('click', showEventDetails);
    calendarElement.appendChild(dayElement);
  }
}

// イベント詳細を表示
function showEventDetails(event) {
  const date = event.target.dataset.date;
  if (events[date]) {
    alert(`${events[date].title}\n\n${events[date].details}`);
  }
}

// 前月に移動
document.getElementById('prevMonth').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

// 次月に移動
document.getElementById('nextMonth').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// 初期表示
renderCalendar();
