import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Разрешаем туннельные домены (ngrok), иначе Vite отдаёт "Blocked request".
const tunnelHosts = ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.app', '.ngrok.io']

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    allowedHosts: tunnelHosts,
  },
  // Прод-превью (npm run preview): минифицированный билд, отдаётся быстро через туннель.
  preview: {
    port: 5173,
    allowedHosts: tunnelHosts,
  },
})
