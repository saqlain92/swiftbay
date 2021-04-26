const express = require('express');
const Router  = express.Router();
const product = require('./service');


Router.post('/products', product.upload.single('img'),product.validate, (req, res)=>{
    product.add(req).
    then(result => res.status(200).send({result})).
    catch(err => res.send({err}));
});


Router.get('/products' , (req, res)=>{
    product.getAll().
    then(results=> res.status(200).send(results)).
    catch(err=> res.status(400).send(err));
});

Router.get('/products/:id' , (req,res)=>{
    product.getOne(req.params.id).
    then(result => res.status(200).send(result)).
    catch(err=> res.status(400).send(err));
});

Router.delete('/products/:id/delete', (req,res)=>{
    product._delete(req.params.id).
    then(result => res.status(200).send({result})).
    catch(err => res.status(400).send({err}))
})

Router.put('/products/:id' , (req, res)=>{
    product._update(req.params.id , req.body).
    then(result => res.status(200).send(result)).
    catch(err=> res.status(400).send({err}));
});

Router.get('/products/filter/:des', (req, res)=>{
    product.filter(req.params.des).
    then(results => res.status(200).send(results)).
    catch(err => res.status(400).send(err));
})

Router.post('/mail' , (req, res)=>{
    product.mailer().
    then(result => res.status(200).send(result)).
    catch(err => res.status(400).send(err));
})



module.exports = Router;