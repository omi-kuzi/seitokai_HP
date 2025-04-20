document.addEventListener("DOMContentLoaded", function() {
    const newsData = [
        { title: "文化祭のお知らせ", date: "2025-04-01", content: "文化祭の日程が決まりました。" },
        { title: "新学期の始まり", date: "2025-04-15", content: "新学期の開始日程について。" }
    ];

    const newsList = document.getElementById("news-list");

    newsData.forEach(news => {
        const article = document.createElement("div");
        article.classList.add("news-article");

        const title = document.createElement("h2");
        title.textContent = news.title;

        const date = document.createElement("p");
        date.classList.add("news-date");
        date.textContent = `日付: ${news.date}`;

        const content = document.createElement("p");
        content.classList.add("news-content");
        content.textContent = news.content;

        article.appendChild(title);
        article.appendChild(date);
        article.appendChild(content);

        newsList.appendChild(article);
    });
});
