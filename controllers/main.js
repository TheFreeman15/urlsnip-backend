const Link = require('../models/Link')

function randomgenerator(){
    return Math.random().toString(36).substr(2, 9);
}
module.exports = {
    index: (req,res,next)=>{
          data = "Hello"
          res.status(200).json(data)
    },

    create: async(req,res,next)=>{
        destination = req.body.destination
        urlslug = randomgenerator();
        const newLink = new Link({
            slug: urlslug,
            destination: destination,
            expiresin:req.body.expiresin,
        })
        await newLink.save()
        res.status(200).json(req.body)
    }
}