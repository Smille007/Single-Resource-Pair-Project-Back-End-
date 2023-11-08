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
                "INSERT INTO cats (name, age, color, breed, arrival_date, spayed) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [cat.name, cat.age, cat.color, cat.breed, cat.arrival_date, cat.spayed]
            )
            return newCat
        } catch(error) {
            return error
        }
    }
    const deleteCat = async (id) => {
        try {
            const deletedCat = await db.one("DELETE FROM cats WHERE id=$1 RETURNING *", id)
            return deletedCat
        } catch (error) {
            return error
        }
    }
    const updateCat = async (id, cat) => {
        try {
            const updatedCat = await db.one(
                "UPDATE cats SET name=$1, age =$2, color=$3, breed=$4, arrival_date=$5, spayed=$6 WHERE id=$7 RETURNING *",
                [cat.name, cat.age, cat.color, cat.breed, cat.arrival_date, cat.spayed, id]
            )
            return updatedCat
        } catch (error) {
            return error
        }
    }
module.exports = {getAllCats, getCat, createCat, deleteCat, updateCat}
