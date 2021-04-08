const { body, validationResult } = require('express-validator')

const annanceRules = () => [
  
    body('point_depart', 'point de départ is required').notEmpty(),
    body("point_darriver", "point d'arrivée is required").notEmpty(),
    body('date_depart', 'date_depart is required').notEmpty(),
    body('descreption', 'descreption is required'),
    body('Nbr_place', 'Nbr_place is required').notEmpty(),
    body('voiture', 'voiture is required').notEmpty()
]

const validatorAnnance = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(  errors.array().map(err=>({msg:err.msg})) );
    }else{
        next()
    }

}


module.exports = {validatorAnnance,annanceRules }