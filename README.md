https://godoysuellen.github.io/portifolio.github.io/



docker build -f "Dockerfile" -t portifolio .

docker tag 2d05fb7af56e suellengodoy/desenvolvimento:portifolio

sudo docker run -d -p 80:80 suellengodoy/desenvolvimento:portifolio


docker build -f "Dockerfile" -t api .

docker tag ID suellengodoy/desenvolvimento:api
sudo docker run -d -p 80:80 suellengodoy/desenvolvimento:api