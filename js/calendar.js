// カレンダーを動的に表示
const events = {
  '2025-04-10': '定例会',
  '2025-04-15': '新入生歓迎会',
  // 他のイベント...
};

// カレンダーの表示
document.querySelectorAll('td').forEach(td => {
  const day = td.innerText;
  if (events[`2025-04-${day}`]) {
    td.style.backgroundColor = '#FFDFDF';
    td.title = events[`2025-04-${day}`];
  }
});

