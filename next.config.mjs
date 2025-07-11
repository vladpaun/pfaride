/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // opțional: URL-urile vor avea „/” la final ( /pagina/  în loc de  /pagina )
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
