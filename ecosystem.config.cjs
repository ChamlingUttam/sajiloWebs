module.exports = {
  apps: [
    {
      name: "sajilo-sewa-landing-3002",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3002",
      autorestart: true,
      watch: false,
      env: {
        PM2_DOTENV:true,
        NODE_ENV: "production",
        NEXT_PUBLIC_FRONTEND_URL: "https://sajilows.com",
      }
    }
  ]
}