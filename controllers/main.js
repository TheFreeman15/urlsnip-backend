const { restart } = require('nodemon');
const Link = require('../models/Link')

function randomgenerator(){
    return Math.random().toString(36).substr(2, 9);
}
module.exports = {
    index: async (req,res,next)=>{
          const links = await Link.find({});
          res.status(200).json(links)
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
        res.status(201).json(newLink)
    },
    getLink: async (req,res,next)=>{
        const {slug} = req.params
        const result = await Link.find().where('slug').equals(slug)
        res.status(200).json(result)
    }

}