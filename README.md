# Анонимный оффлайновый инстаграм

### Данные для новой эмоджи
GET: http://localhost:3000/girls/redfenf/emoji/new.json

Пример ответа
```json
  {
    "id":4,
    "slug":"1013a47",
    "nickname":"Susan",
    "photo_url":"http://goldengirls.ru/upload/iblock/5ad/gallery4.jpg",
    "created_at":"2016-12-10T13:56:58.673Z",
    "updated_at":"2016-12-10T13:56:58.673Z",
    "emojis_count":null
  }
```

### Ручка для постинга эмоджи
POST: http://localhost:3000/girls/redfenf/emoji.json
Постить можно все что угодно входящие параметры мы не проверяем
Если все прошло хорошо status: 200
