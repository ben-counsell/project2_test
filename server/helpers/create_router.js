const express = require('express');
const ObjectID = require('mongodb').ObjectId;


const createRouter = function (collection) {

    const router = express.Router();
  
    router.get("/", (req, res) => {
      collection.find().toArray()
      .then((listOfUsers) => res.json(listOfUsers))
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({status:500, error: err})
      })
    })
    
    router.get('/:id', (req, res) => {
      const id = req.params.id;
      collection
        .findOne({ _id: new ObjectID(id) })
        .then((doc) => res.json(doc))
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
    })


    // router.get('/:id/name', (req, res) => {
    //     const id = req.params.id;
    //   collection
    //     .findOne({ _id: new ObjectID(id) },{_id:0})
    //     .then((doc) => res.json(doc))
    //     .catch((err) => {
    //       console.error(err);
    //       res.status(500);
    //       res.json({ status: 500, error: err });
    //     });
 // const id = req.params.id;
        // const user = collection.findOne({_id: new ObjectID(id)});
        // const value = user.name;
        // res.send([value])
        // ((doc)=> res.json(doc))
        // .catch((err) => {
        //         console.error(err);
        //         res.status(500);
        //         res.json({ status: 500, error: err });
        //     });
        
        // result.then((value) => res.json(value))
        // 
        // collection
        //     .findOne({name: "Gina Brand"})
            
            
        })

    return router


}

module.exports = createRouter;