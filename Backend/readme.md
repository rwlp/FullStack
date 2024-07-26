# Backend Notes

## Description
This is importants notes about backend projetc, based on [MateAcademy Brasil](https://mate.academy/pt-br) final project fullstack bootcamp.

## Hi from the author: 
- Hi! I hope you apreciate this!

## Run backend in yor localhost

1. `cd <repositorio>/Backend`
2. `npm install`
3. Run database first!
3. `npm run dev` or `npm run build` > `npm start`

## Run docker for dev database 

1. Install docker in your OS and login [Instructions](https://www.docker.com/)
2. Run in your terminal `docker run -d -p 5432:5432 rwlipunisher/fullstack_devdb`

## Run data base
1. Run Docker dev database
2. `npx prisma generate`
3. `npx prisma migrage dev`
5. `npx ts-node prisma\seeders\test_connection.ts`


## Validade data
- All Request data is validate in DTO's and in middlewareCheckRequest.ts;

## License

[LICENSE](LICENSE).
