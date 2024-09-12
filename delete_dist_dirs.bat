@echo off
setlocal enabledelayedexpansion

for /d /r %%d in (*dist*) do (
    echo Deleting directory: %%d
    rmdir /s /q "%%d"
)

endlocal
