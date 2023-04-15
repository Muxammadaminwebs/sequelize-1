import sequelize from "../utils/sequelize";
import { DataTypes } from "sequelize"



const users = sequelize.define("products", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING
    }
});



const GET = async (req, res) => {
    res.send(await users.findAll())
}



const POST = async(req, res) => {
    const { username, address  } = req.body

    const users2  = await users.create({
        username,
       address
    })
    res.status(201).json({
        success: true,
        data: users2
    })
}




const PATCH = async(req, res) => {
    const { id } = req.params
    const { username, address } = req.body

    const update = await Todos.update({
                username,
                address
            },
       {
        returning: true,
        where: {
            id
        }
       }
    )
    res.status(201).json({
        success: true,
        data: update[1][0]
    })
}



const DELETE = async(req, res) => {
    const { id } = req.params

    const Deleteusers = await users.destroy({
        returning: true,
        where: {
            id
        }
       },
       
    )
    res.status(201).json({
        success: true,
        data: Deleteusers
    })
}


export default {
    GET,
    POST,
    PATCH,
    DELETE
}