const express = require('express');
const app = express();
const fs = require('fs');

const filesDir = '\arhiv'; // шлях до каталогу з файлами

app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename; // отримуємо ім'я файлу з запиту
  const filePath = `${filesDir}\\${filename}`;	
  if (fs.existsSync(filePath)) { // перевірка наявності файлу
	//res.send(`Файл ${filename} завантажується `);
	res.download(filePath); // віддаємо файл для завантаження
	//res.setHeader('Content-Type', 'text/plain; charset=utf-8');
	//res.end(`Файл ${filename} завантажено `);
    
  } else {
    res.status(404).send('Файл не знайдено'); // генеруємо помилку 404
  }
});

app.listen(3000, () => {
  console.log('Сервер  включений');
});
