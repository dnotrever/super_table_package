#!/usr/bin/env bash

echo "Iniciando serviços..."

echo "Iniciando Backend (Flask)..."
cd /app/backend
python3 app.py &
BACKEND_PID=$!

sleep 2

echo "Iniciando Frontend (Vite)..."
npm run dev -- --host 0.0.0.0 --port 5173 &
FRONTEND_PID=$!

echo ""
echo "Serviços iniciados!"
echo ""
echo "   Backend:  http://localhost:5000"
echo "   Frontend: http://localhost:5173"
echo ""
echo "Pressione Ctrl+C para parar ambos os serviços"

cleanup() {
    echo ""
    echo "Parando serviços..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

trap cleanup INT TERM

wait
