// const express   = require('express');
// const Router    = express.Router();
// const jwt       = require('jsonwebtoken');
// const passport  = require("passport");
// const User      = require('../user/model');
// const service   = require('../user/service');
// const authorize = require('../helpers/authorize');
// const product   = require('../product/service');
// const complaintService = require('../complaint/service');

// Router.get('/products' ,  (req, res, next)=>{
//     product.getAll(req).
//     then(results=> res.status(200).send(results)).
//     catch(err=> next(err));
// });

// Router.post('/products/complaint/:id' , (req, res, next )=>{
//   complaintService.createComplaint(req).
//   then(result => res.status(200).send(result)).
//   catch(err => next(err));
// })

// Router.get('/products/search', (req ,res, next)=>{
//   product._search(req).
//   then(result => {res.status(200).send(result)}).
//   catch(err => next(err));
// } )

// Router.post('/phone_Login', (req, res, next)=>{
//   service.phone_Login(req.body).
//   then(result => res.send(result)).
//   catch(err => next(err));
// })

// Router.post('/login', (req, res, next) => {
//     passport.authenticate('local', { session: false }, (err, user, info) => {
//       if (err || !user) {
//         return res.status(400).json({
//           message: info.message,
//           user: user
//         });
//       }
//       req.login(user, { session: false }, (err) => {
//         if (err) {
//           res.send(err);
//         }
//         // generate a signed son web token with the contents of user object and return it in the response
//         const token = jwt.sign(user.toJSON(), 'your_jwt_secret');
//         return res.json({ user, token });
//       });
//     })(req, res);
//   });
  
//   Router.get('/users', (req, res, next) => {
//     service.getAll(next).
//       then(users => res.status(200).send(users)).
//       catch(err => next(err));
//   })
  
//   Router.post('/signUp',  service.validate, (req, res, next) => {
//     service.createUser(req.body, next).
//       then(user => res.status(200).send(user)).
//       catch(err => next(err));
//   })
  
//   Router.post('/forget', (req, res, next) => {
//     service.forgetPass(req.body, next).
//       then(result => res.status(200).send(result)).
//       catch(err => next(err));
//   })
  
//   Router.get('/products/filter/:des', (req, res, next)=>{
//     product.filter(req.params.des).
//     then(results => res.status(200).send(results)).
//     catch(err => next(err));
// })



// Router.post('/products/complaints/:id', (req, res, next)=>{
//   complaintService.updateStatus(req).
//   then(result => res.status(200).send(result)).
//   catch(err => next(err));
// })



// Router.get('/products/track/:id', (req, res, next)=>{
//   product.track(req.params.id).
//   then(results => res.status(200).send(results)).
//   catch(err => next(err));
// })

//   module.exports = Router;
