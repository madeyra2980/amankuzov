# 🐳 Docker Setup для Aman Kuzov

## 📋 Обзор

Этот Docker Compose файл запускает все сервисы проекта "Aman Kuzov" одновременно:

- **React Frontend** (порт 3000) - веб-интерфейс
- **Node.js Backend** (порт 1015) - API сервер
- **Python AI API** (порт 8000) - AI анализ автомобилей
- **MongoDB** (порт 27017) - база данных

## 🚀 Быстрый запуск

### 1. Убедитесь что Docker установлен
```bash
docker --version
docker-compose --version
```

### 2. Запустите все сервисы
```bash
# Из корневой папки проекта
g```

### 3. Проверьте статус сервисов
```bash
docker-compose ps
```

### 4. Посмотрите логи
```bash
# Все сервисы
docker-compose logs -f

# Конкретный сервис
docker-compose logs -f react-frontend
docker-compose logs -f nodejs-backend
docker-compose logs -f python-ai
```

## 🌐 Доступные URL

После запуска сервисы будут доступны по адресам:

- **React Frontend**: http://localhost:3000
- **Node.js API**: http://localhost:1015
- **Python AI API**: http://localhost:8000
- **MongoDB**: localhost:27017

## 🛠 Команды управления

### Остановка сервисов
```bash
docker-compose down
```

### Перезапуск сервисов
```bash
docker-compose restart
```

### Пересборка образов
```bash
docker-compose build --no-cache
docker-compose up -d
```

### Очистка (удаление контейнеров и томов)
```bash
docker-compose down -v
docker system prune -a
```

## 📁 Структура Docker файлов

```
/app/
├── docker-compose.yml          # Основной файл конфигурации
├── aman-kuzov-frontend/
│   └── Dockerfile              # React приложение
├── backend-1/
│   ├── backend/
│   │   └── Dockerfile          # Node.js API
│   └── python-ai/
│       └── Dockerfile          # Python AI API
└── DOCKER_SETUP.md             # Эта инструкция
```

## 🔧 Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```bash
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

## 🐛 Решение проблем

### Проблема с портами
Если порты заняты, измените их в `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Вместо 3000:3000
```

### Проблема с правами доступа
```bash
# На macOS/Linux
sudo chown -R $USER:$USER .
```

### Очистка Docker
```bash
# Удалить все неиспользуемые контейнеры и образы
docker system prune -a

# Удалить все тома
docker volume prune
```

## 📊 Мониторинг

### Просмотр использования ресурсов
```bash
docker stats
```

### Просмотр логов в реальном времени
```bash
docker-compose logs -f --tail=100
```

## 🎯 Что происходит при запуске

1. **MongoDB** запускается первой и создает базу данных
2. **Python AI** загружает модель YOLO и запускает FastAPI сервер
3. **Node.js Backend** подключается к MongoDB и запускает Express сервер
4. **React Frontend** компилируется и запускается на порту 3000

Все сервисы автоматически перезапускаются при сбоях благодаря `restart: unless-stopped`.

## ✅ Проверка работоспособности

После запуска проверьте:

1. **Frontend**: http://localhost:3000 - должен открыться интерфейс
2. **Backend API**: http://localhost:1015 - должен показать JSON с эндпоинтами
3. **Python AI**: http://localhost:8000 - должен показать информацию об API
4. **Health check**: http://localhost:8000/health - должен показать статус модели

## 🎉 Готово!

Теперь все сервисы запущены и готовы к работе!
