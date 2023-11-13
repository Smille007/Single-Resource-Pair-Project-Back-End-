const express = require("express");
const cats = express.Router();
const{getAllCats, getCat, createCat, deleteCat, updateCat} = require('../queries/cat')
const {checkName, checkAge, checkColor, checkBreed, checkBoolean} = require('../validations/checkCats')

cats.get("/",async (req, res) => {
    const allCats = await getAllCats()
    if (allCats[0]){
        res.status(200).json(allCats)
    }else{
        res.status(500).json({error: "server error"})
    }
    })
    cats.get('/:id', async(req, res) => {
        const {id} = req.params
        const oneCat = await getCat(id)
        if (oneCat){
            res.status(200).json(oneCat)
        }else{
            res.status(404).json({error:'non found'})
        } 
    })

    cats.post('/', checkName, checkAge, checkColor, checkBreed, checkBoolean, async (req, res) => {
        const body = req.body
       const cat = await createCat(body)
       res.status(200).json(cat)
    })

    cats.delete('/:id', async (req, res) => {
        const { id } = req.params
        const deletedCat = await deleteCat(id)
        if(deletedCat.id){
            res.status(200).json(deletedCat)
        } else {
            res.status(404).json({ error: "Cat Not Found" })
        }
    })
    cats.put("/:id",checkName, checkAge, checkColor, checkBreed, checkBoolean, async (req, res) => {
        const { id } = req.params
        const body = req.body
        const updatedCat = await updateCat(id, body)
        if(updatedCat.id){
            res.status(200).json(updatedCat)
        } else {
            res.status(404).json({ error: "Cat Not Found" })
        }
    })
    cats.get("/*", (req, res) => {
        res.status(404).send("Page not found");
      });

    module.exports = cats