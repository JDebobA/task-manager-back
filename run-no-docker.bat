@echo off
setlocal

if not exist ".env" (
  echo [ERROR] .env file not found.
  echo Copy .env.school.example to .env and set DATABASE_URL first.
  pause
  exit /b 1
)

call npm run setup:no-docker
if errorlevel 1 (
  echo [ERROR] Setup failed.
  pause
  exit /b 1
)

call npm run start:no-docker
