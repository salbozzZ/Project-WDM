@echo off
echo =======================================================
echo   PUSH PROJECT WDM KE GITHUB
echo   Repository: https://github.com/salbozzZ/Project-WDM.git
echo =======================================================
echo.

git push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo =======================================================
    echo   BERHASIL! Project telah ter-push ke GitHub.
    echo =======================================================
) else (
    echo =======================================================
    echo   Jika diminta login, silakan login melalui jendela
    echo   browser yang muncul atau gunakan Personal Access Token.
    echo =======================================================
)
echo.
pause
