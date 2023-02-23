/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/clinic' : '',
    publicRuntimeConfig: {
        contextPath: process.env.NODE_ENV === 'production' ? '/clinic' : '',
        uploadPath: process.env.NODE_ENV === 'production' ? '/clinic/upload.php' : '/api/upload'
    }
};

module.exports = nextConfig;
