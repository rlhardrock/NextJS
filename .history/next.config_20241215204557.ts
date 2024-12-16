import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Asegura un desarrollo más robusto
  swcMinify: true, // Minificación de JavaScript para mejor rendimiento
  experimental: {
    appDir: true, // Habilita la nueva estructura basada en "app" (si estás usándola)
  },
  // Puedes agregar más configuraciones específicas aquí
};

export default nextConfig;
