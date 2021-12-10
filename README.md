

# React JS Complete Crash Course

This is a complete crash course series tutorial.
In this tutorial, I've shown many more concepts of React and complete 3 projects using React. Let's dive into it and Learn React Together.
Please go to bottom to see the codes Topic wise, otherwise just continue and you could see the final project at - https://maniruzzamanakash.github.io/React-Crash-Course



## How to install & Run
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Clone Repository

```bash
git clone https://github.com/ManiruzzamanAkash/React-Crash-Course.git
```

#### Go to that folder
```bash
cd React-Crash-Course 
```

#### Install NPM
```bash
npm i
```

#### Run on Local
```bash
npm start
```


#### Go to Browser and check the URL
http://localhost:3000

#### Change Your Dataset in

```bash
src/utils/data.js
```

#### Change Route 
Change route to fix duplicate render. I've done only to publish React Page in Github - `src/routes/index.js` 
at **Line No - 23**
```js
{
    path: '/',
    component: Home,
    exact: true // This should true, I've added it as false in github just for page make in github
},
```


#### Check the Browser Again
http://localhost:3000

Booom !!! You made a great portfolio website.

## See the complete Step by step article 
https://devsenv.com/tutorials/learn-react-complete-crash-course-with-three-complete-project-devsenv


# Chapters or Topic Wise Codes
1. **Components Learning** - https://github.com/ManiruzzamanAkash/React-Crash-Course/tree/components

1. **Component Communication** - https://github.com/ManiruzzamanAkash/React-Crash-Course/tree/component-communication

1. **CSS Styles Learning** - https://github.com/ManiruzzamanAkash/React-Crash-Course/tree/css

1. **Conditional & Loop Learning** - https://github.com/ManiruzzamanAkash/React-Crash-Course/tree/condition-loop

1. **Task Application** - https://github.com/ManiruzzamanAkash/React-Crash-Course/tree/my-task

1. **Components Learning** - https://github.com/ManiruzzamanAkash/React-Crash-Course/tree/components

1. **Counter App** - https://github.com/ManiruzzamanAkash/React-Crash-Course/tree/counter-app

1. **React Router Learning** - https://github.com/ManiruzzamanAkash/React-Crash-Course/tree/react-router

1. **Portfolio & Final Website** - https://github.com/ManiruzzamanAkash/React-Crash-Course/tree/portfolio-template

Final website is also in `main` branch

### Dockerize Setup:

```sh
## Dev Environment
# Build a docker image:portfolio.
docker build -t portfolio:dev .

# Fire Up the docker container
docker-compose up -d --build

# Now check from browser
http://localhost:3001

## Production Environment
docker build -f DockerFile.prod -t portfolio:prod .

# Fire up the container in Live
docker-compose -f docker-compose.prod.yml up -d --build

# Run in Live Browser in 1337 port
http://localhost:1337
```


### Still Any Issues?
Just mail me about your problem - manirujjamanakash@gmail.com