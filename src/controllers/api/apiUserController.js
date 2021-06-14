const path = require('path');
const {User} = require('../../database/models');
//const sequelize = db.sequelize;
//const { Op } = require("sequelize");
//const moment = require('moment');

const userAPIController = {
    index: (req, res) => {
        User.findAll()
        .then(user => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: user.length,
                    url: 'api/user'
                },
                data: user
            }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        User.findByPk(req.params.id)
            .then(User => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: User.length,
                        url: '/api/user/:id'
                    },
                    data: User
                }
                res.json(respuesta);
            });
    },
    create: (req,res) => {
        User.create({
            firstName : req.body.firstname,
            lastName : req.body.lastname,
            email : req.body.email,
            password : (bcrypt.hashSync(req.body.password, 10)),
            userType : 0
        }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/user/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/user/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let userId = req.params.id;
        Products.update(
            {
            firstName : req.body.firstname,
            lastName : req.body.lastname,
            email : req.body.email,
            password : (bcrypt.hashSync(req.body.password, 10)),
            userType : 0
        },
            {
                where: {id: userId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/user/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/user/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let userId = req.params.id;
        User.destroy({where: {id: userId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/user/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/user/delete/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
}

module.exports = userAPIController;
