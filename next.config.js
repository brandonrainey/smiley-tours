/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: 'https://www.smileytour.netlify.app',
                destination: 'https://www.smileytour.guide',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
