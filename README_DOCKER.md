# 🐳 Aman Kuzov - Docker Setup

Полная настройка Docker для запуска всех сервисов проекта "Aman Kuzov" одним командой.

## 🚀 Быстрый старт

### 1. Запуск всех сервисов
```bash
./start.sh
```

### 2. Остановка всех сервисов
```bash
./stop.sh
```

## 📋 Что запускается

| Сервис | Порт | Описание |
|--------|------|----------|
| **React Frontend** | 3000 | Веб-интерфейс приложения |
| **Node.js Backend** | 1015 | API сервер для загрузки файлов |
| **Python AI API** | 8000 | AI анализ автомобилей |
| **MongoDB** | 27017 | База данных |

## 🌐 Доступные URL

- **Главная страница**: http://localhost:3000
- **API документация**: http://localhost:1015
- **Python AI API**: http://localhost:8000
- **Health check**: http://localhost:8000/health

## 🛠 Ручное управление

### Запуск
```bash
docker-compose up -d
```

### Остановка
```bash
docker-compose down
```

### Просмотр логов
```bash
# Все сервисы
docker-compose logs -f

# Конкретный сервис
docker-compose logs -f react-frontend
docker-compose logs -f nodejs-backend
docker-compose logs -f python-ai
```

### Перезапуск
```bash
docker-compose restart
```

### Пересборка
```bash
docker-compose build --no-cache
docker-compose up -d
```

## 📁 Структура файлов

```
/app/
├── docker-compose.yml          # Основная конфигурация
├── start.sh                   # Скрипт запуска
├── stop.sh                    # Скрипт остановки
├── DOCKER_SETUP.md            # Подробная документация
├── aman-kuzov-frontend/
│   ├── Dockerfile             # React приложение
│   └── .dockerignore
├── backend-1/
│   ├── backend/
│   │   ├── Dockerfile         # Node.js API
│   │   └── .dockerignore
│   └── python-ai/
│       ├── Dockerfile         # Python AI
│       └── .dockerignore
└── README_DOCKER.md           # Эта инструкция
```

## 🔧 Настройка

### Переменные окружения

Создайте файл `.env` в корне проекта:

```env
# MongoDB
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=password123
MONGO_DATABASE=aman_kuzov

# Backend
NODE_ENV=production
BACKEND_PORT=1015
CORS_ORIGIN=http://localhost:3000

# Frontend
REACT_APP_API_URL=http://localhost:1015
REACT_APP_PYTHON_AI_URL=http://localhost:8000
```

### Изменение портов

Если порты заняты, измените их в `docker-compose.yml`:

```yaml
services:
  react-frontend:
    ports:
      - "3001:3000"  # Изменить на нужный порт
```

## 🐛 Решение проблем

### Порт уже используется
```bash
# Найти процесс на порту
lsof -i :3000

# Изменить порт в docker-compose.yml
```

### Проблемы с правами доступа
```bash
# macOS/Linux
sudo chown -R $USER:$USER .
```

### Очистка Docker
```bash
# Удалить все контейнеры и образы
docker-compose down -v
docker system prune -a
```

### Перезапуск с чистого листа
```bash
docker-compose down -v
docker system prune -a
./start.sh
```

## 📊 Мониторинг

### Статус сервисов
```bash
docker-compose ps
```

### Использование ресурсов
```bash
docker stats
```

### Логи в реальном времени
```bash
docker-compose logs -f --tail=100
```

## ✅ Проверка работоспособности

1. **Frontend**: http://localhost:3000 - должен открыться интерфейс
2. **Backend**: http://localhost:1015 - должен показать JSON с API эндпоинтами
3. **Python AI**: http://localhost:8000 - должен показать информацию об API
4. **Health**: http://localhost:8000/health - должен показать статус модели

## 🎯 Готово!

Теперь у вас есть полнофункциональная система с Docker, которая запускает все сервисы одной командой!

Для получения подробной документации см. [DOCKER_SETUP.md](./DOCKER_SETUP.md)
