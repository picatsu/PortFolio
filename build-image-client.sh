
npm run build --prod

docker build  -t ezzefiohez/picatsu-portfolio .
docker push ezzefiohez/picatsu-portfolio

echo " ######## BUILD picatsu-portfolio DONE ######## "

curl  -X POST http://146.59.195.214:9000/api/webhooks/2bd79cc2-5d78-4231-a5af-3efdde37ee59
