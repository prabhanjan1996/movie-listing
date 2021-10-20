exports.success = (res, message, data) => {
    res.status(200).send({
        success: true,
        message,
        data,
    })
}


exports.error = (res,error, message, data) => {
    res.status(400).send({
        success: false,
        message,
        data,
    })
}

//Get method 
exports.return = (res, error, data, message) => {
    if (error) 
    {
        return res.status(400).send({ success: false, message: error.message, errors: error.name})
    }
    else if(!data) 
    {
        res.status(404).send({ success: false, message:"No Record found" })
    }
    else 
    {
        return res.status(200).send({ success: true, message,data })
    }    
 }

exports.authFailed = (res, message) => {
    return res.status(401).send({
        success: false,
        message,
    })
}

exports.created = (res, error, data, message) => {
    if (error) 
    {
        return res.status(400).send({ success: false, message: error.message, errors: error.name})
    }
    else if(!data) 
    {
        res.status(404).send({ success: false, message:"Unable to create Record" })
    }
    else 
    {
        return res.status(201).send({ success: true, message,data })
    }    
}

exports.notFound = (res) => {
    return res.status(404).json({
        success: false,
        message: "404!! method not found!",
    })
}

exports.noRecord = (res,message) => {
    return res.status(404).json({
        success: false,
        message,
    })
}

exports.notMatch = (res, message) => {
    return res.status(400).json({
        success: false, message,
    })
}

