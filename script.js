document.addEventListener("DOMContentLoaded", function() {
    const events = {
        "2025-04-01": { title: "文化祭準備", description: "文化祭の準備が行われます。" },
        "2025-04-15": { title: "新学期の開始", description: "新学期が開始されます。" }
    };

    const calendarContainer = document.getElementById("calendar");
    const eventDetails = document.getElementById("event-details");

    // カレンダーを作成
    function generateCalendar() {
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let calendarHTML = "<div class='calendar-header'><span>日</span><span>月</span><span>火</span><span>水</span><span>木</span><span>金</span><span>土</span></div><div class='calendar-body'>";

        let day = 1;
        for (let i = 0; i < 6; i++) {
            calendarHTML += "<div class='calendar-row'>";
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    calendarHTML += "<div class='calendar-cell'></div>";
                } else if (day <= daysInMonth) {
                    const currentDate = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                    calendarHTML += `<div class='calendar-cell' onclick="showEvent('${currentDate}')">${day}</div>`;
                    day++;
                }
            }
            calendarHTML += "</div>";
        }

        calendarHTML += "</div>";
        calendarContainer.innerHTML = calendarHTML;
    }

    // イベント詳細を表示
    function showEvent(date) {
        if (events[date]) {
            eventDetails.innerHTML = `
                <h2>${events[date].title}</h2>
                <p>${events[date].description}</p>
            `;
        } else {
            eventDetails.innerHTML = `<p>この日はイベントがありません。</p>`;
        }
    }

    generateCalendar();
});
