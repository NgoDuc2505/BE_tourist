const success = (res,content,msg = "Success")=>{
    res.status(200).json({
        statusCode: 200,
        content,
        msg,
        date: new Date(),
    })
}

const failed = (res,msg = "Failed")=>{
    res.status(200).json({
        statusCode: 200,
        content : [],
        msg,
        date: new Date(),
    })
}

const server = (res)=>{
    res.status(200).json({
        statusCode: 200,
        content : [],
        msg : "SERVER ERR 500",
        date: new Date(),
    })
}

export {
    server,
    success,
    failed
}