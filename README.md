https://godoysuellen.github.io/portifolio.github.io/



docker build -f "Dockerfile" -t portifolio .

docker tag ec002e4adc47 suellengodoy/desenvolvimento:portifolio

docker tag 4c2edf37cbde suellengodoy/desenvolvimento:api

sudo docker run -d -p 80:80 suellengodoy/desenvolvimento:portifolio


docker build -f "Dockerfile" -t api .

docker tag ID suellengodoy/desenvolvimento:api
sudo docker run -d -p 80:80 suellengodoy/desenvolvimento:api