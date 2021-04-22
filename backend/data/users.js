import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'Seetha Ram',
        email:'see@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Janaki Ram',
        email:'jan@example.com',
        password:bcrypt.hashSync('123456',10),
    },
]

export default users