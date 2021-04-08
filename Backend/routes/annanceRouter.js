const express=require('express');
const { addannance,annanceModification,deleteAnnance,getAllAnnance } = require('../controllers/annaceControllers');
const isAuth = require('../middleware/isAuth')
const{validatorAnnance,annanceRules }=require('../middleware/annanceValidator');

const router=express.Router()

router.get('/annances', getAllAnnance)
router.post('/newannance',annanceRules(),validatorAnnance,isAuth,addannance )
router.delete('/deleteannance/:id',isAuth,deleteAnnance )//afsa5
router.put('/modifannance/:id',isAuth,annanceModification )//badel

module.exports=router



