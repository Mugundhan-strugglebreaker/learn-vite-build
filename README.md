for creating react app

npm create vite
After series of questions to choose language and framework

inorder to skip the questions
execute this:
npm create vite@latest my-react-app --template react-ts

After that 
cd my-react-app
npm i
npm run dev

environment variables

.env  ---> loaded in all cases
.env.local ---> loaded in all cases , ignored by git
.env.[mode] --> only loaded in specific mode that is dev , qa, uat and prod

when we are adding environment variable we have to prefix the VITE word


priority wise

env set in scripts under package.json
env set specific to environment mode
env set in local .env or .env.local

