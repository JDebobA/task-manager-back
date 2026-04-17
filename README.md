# Task Manager Back

Локальный backend на NestJS + Prisma.  
Проект теперь запускается без Docker и без PostgreSQL, используя SQLite-файл внутри проекта.

## Требования

- Node.js 20+ (или 18+)
- Yarn

Админ-права не нужны.

## Первый запуск

1. Скопировать переменные окружения:

```bash
cp .env.example .env
```

2. Установить зависимости:

```bash
yarn install
```

3. Создать локальную базу SQLite и таблицы:

```bash
yarn db:push
```

4. Запустить backend:

```bash
yarn start:dev
```

## Полезные команды

```bash
# Prisma Studio
yarn db:studio

# Тесты
yarn test
```
