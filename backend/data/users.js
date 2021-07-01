import bcrypt from "bcryptjs";

const users = [
    {
        name: "Andrew smith",
        email: "andrew@demomail.com",
        password: bcrypt.hashSync("123456", 10)
    },
    {
        name: "John doe",
        email: "john@demomail.com",
        password: bcrypt.hashSync("123456", 10)
    },
    {
        name: "william johnson",
        email: "william@demomail.com",
        password: bcrypt.hashSync("123456", 10)
    },
]   

export default users