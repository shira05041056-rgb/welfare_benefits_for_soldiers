from node:24.17.0

workdir app/

copy package* .json .

run npm install

copy . .

cmd ["node", "start"]