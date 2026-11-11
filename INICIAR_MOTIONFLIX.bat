@echo off
chcp 65001 > nul
title MOTIONFLIX · Servidor Local
cls
echo ===================================================================
echo              🎬 INICIANDO MOTIONFLIX (SERVIDOR LOCAL)
echo ===================================================================
echo.
echo [1/2] Iniciando servidor web local na porta 3000...
echo [2/2] Abrindo Motionflix no seu navegador padrão...
echo.
echo -> http://localhost:3000
echo.
echo * DICA: Mantenha esta janela aberta enquanto estiver assistindo às aulas.
echo        Para encerrar, basta fechar esta janela.
echo ===================================================================
echo.

start http://localhost:3000
python -m http.server 3000
