const db = require('../db/dbConfig')



const getAllCats = async () =>{
    try{
        const allCats = await db.any("SELECT * FROM cats")
        return allCats

    } catch(error){
return error
    }
}

const getCat = async (id) => {
    try {
        const oneCat = await db.one("SELECT * FROM cats WHERE id=$1",id)
        return oneCat;
    } catch (error) {
        return error
    }
    }

    const createCat = async(cat) => {
        try {
            const newCat = await db.one(
                "INSERT INTO cats (name, age, color, breed, spayed) VALUES ($1, $2, $3, $4, $5) RETURNING *", [cat.name, cat.age, cat.color, cat.breed, cat.spayed]
            )
            return newCat
        } catch(error) {
            return error
        }
    }
module.exports = {getAllCats, getCat, createCat}
