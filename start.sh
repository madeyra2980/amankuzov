#!/bin/bash

# 🚀 Скрипт запуска всех сервисов Aman Kuzov

echo "🚀 Запуск Aman Kuzov - все сервисы..."

# Проверяем наличие Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен. Установите Docker Desktop."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose не установлен. Установите Docker Compose."
    exit 1
fi

echo "✅ Docker найден"

# Останавливаем существующие контейнеры
echo "🛑 Остановка существующих контейнеров..."
docker-compose down

# Собираем и запускаем все сервисы
echo "🔨 Сборка и запуск всех сервисов..."
docker-compose up -d --build

# Ждем запуска сервисов
echo "⏳ Ожидание запуска сервисов..."
sleep 10

# Проверяем статус
echo "📊 Статус сервисов:"
docker-compose ps

echo ""
echo "🎉 Все сервисы запущены!"
echo ""
echo "🌐 Доступные URL:"
echo "   Frontend:    http://localhost:3000"
echo "   Backend API: http://localhost:1015"
echo "   Python AI:   http://localhost:8000"
echo "   MongoDB:     localhost:27017"
echo ""
echo "📋 Полезные команды:"
echo "   Логи:        docker-compose logs -f"
echo "   Остановка:   docker-compose down"
echo "   Перезапуск:  docker-compose restart"
echo ""

