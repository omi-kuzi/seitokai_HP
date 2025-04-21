fetch('news.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('news-list');
    data.articles.forEach(article => {
      const card = document.createElement('div');
      card.className = 'news-card';

      card.innerHTML = `
        <h3>${article.title}</h3>
        <p><strong>日付:</strong> ${article.date}</p>
        <p>${article.content}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('読み込みエラー:', error);
  });
