const checkName = (req, res, next) => {
    if (req.body.name){
   return next()
    }else{
        res.status(400).json({error: 'Name is required'})
    }
}
const checkAge = (req, res, next) => {
    if (req.body.age){
    return next()
    }else{
        res.status(400).json({error: 'Age is required'})
    }
}
        const checkColor = (req, res, next) => {
            if(req.body.color){
                return next()
            }else {
             res.status(400).json({error: 'Color is required'})
            }
            }

            const checkBreed = (req, res, next) => {
                if(req.body.breed){
                    return next()
                }else {
                 res.status(400).json({error: 'Breed is required'})
                }
                }

                  
    const checkBoolean = (req, res, next) =>{
        const spayed = req.body.spayed
        if(typeof spayed === 'boolean'){
            next()
        }else{
            res.status(400).json({error:"Spayed must be type boolean"})
        }
    }
    
    
    
    module.exports = {checkName, checkAge, checkColor, checkBreed, checkBoolean}