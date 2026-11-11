@echo off
chcp 65001 > nul
title MOTIONFLIX · Publicar Nova Matéria ou Insight
cls

echo ===================================================================
echo         ⚡ MOTIONFLIX INSIGHTS · CADASTRO DE MATÉRIAS
echo ===================================================================
echo.
echo Este utilitário adiciona uma nova matéria ou insight diário
echo e publica automaticamente no GitHub Pages.
echo.
echo ===================================================================
echo.

python "%~dp0_tools\adicionar_insight.py"

echo.
echo Pressione qualquer tecla para fechar esta janela...
pause > nul
