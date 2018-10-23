ssh -tt ubuntu@ec2-18-222-232-143.us-east-2.compute.amazonaws.com << EOF
pg_dump diyhub > db-backups/database-$(date +"%Y%m%dT%H%M%S").bak
cd DIYHub
git pull
npm install
npm run build
pm2 restart server.js
exit
EOF