const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 5000

app.use(cors())

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World! Hello')
})

// app.get('/users', (req, res) => {
//     res.send('Hi')
// })

// app.get('/users', (req, res) => {
//     res.send({id: 1, name: 'Saied', email: 'Saied@gmail.com'})
// })

// const users = [
//     {id: 0, name: 'jamal', email: 'jamal@gmail.com', phone: '01756'},
//     {id: 1, name: 'Saied', email: 'saied@gmail.com', phone: '01721'},
//     {id: 2, name: 'Afride', email: 'afride@gmail.com', phone: '01756'},
//     {id: 3, name: 'Ridoy', email: 'ridoy@gmail.com', phone: '01732'},
//     {id: 4, name: 'Kamal', email: 'khalid@gmail.com', phone: '01787'}
// ]

// app.get('/users', (req, res) => {
//     res.send(users)
// })

// // app.get('/users/:id', (req, res) => {
// //     console.log(req.params.id)
// // })

// app.get('/users/:id', (req, res) => {
//     const id = req.params.id;
//     const user = users[id];
//     res.send(user)
// })

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Wow, nice mango')
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple'])
})

//---------------------------------------------------------------------
//----------------------   Search Query   -----------------------------
//---------------------------------------------------------------------
// users?search=mita&&order=asc

const users = [
    {id: 0, name: 'jamal', email: 'jamal@gmail.com', phone: '01756'},
    {id: 1, name: 'Saied', email: 'saied@gmail.com', phone: '01721'},
    {id: 2, name: 'Afride', email: 'afride@gmail.com', phone: '01756'},
    {id: 3, name: 'Ridoy', email: 'ridoy@gmail.com', phone: '01732'},
    {id: 4, name: 'Kamal', email: 'khalid@gmail.com', phone: '01787'}
]

// app.get('/users', (req, res) => {
//     // console.log(req.query);
//     console.log(req.query.search);
//     res.send(users)
// })

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
})

//----------------------   post method  -----------------------------
// app.post('/users', (req, res) => {
//     console.log('hitting post', req.body)
//     res.send('inside post')
// })

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting post', req.body)
    // res.send('inside post');
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



// npm run start-dev