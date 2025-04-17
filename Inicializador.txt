@echo off
echo Iniciando servicios...

:: Aplicar migraciones
cd web
dotnet ef database update

:: Iniciar el backend ASP.NET Core
start cmd /k "dotnet run"

:: Iniciar Angular
cd ../jabil-exercise
start cmd /k "ng serve"

:: Iniciar servicio de SQL Server local
net start MSSQLSERVER

echo Todos los servicios han sido iniciados.
pause