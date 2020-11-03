module.exports = {
    index: (req,res,next)=>{
          data = "Hello"
          res.status(200).json(data)
    }
}