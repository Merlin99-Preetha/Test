const Details = require('./Schema')
const saveDetails = async (req, res) => {
    const newDetails = new Details({
        bookName: req.body.name,
        bookPrice: req.body.price,
        ratings: req.body.rating
    })
    const savedDetails = await newDetails.save()
    res.json({
        message: "Book details are updated",
        data: savedDetails
    })
}
module.exports = { saveDetails }