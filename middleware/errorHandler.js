function errorHandler(error, req, res, next) {
    res.status(500).json({
        success: false,
        title: error.name,
        message: error.message,
        name: "Internal Server Error",
        description: "A generic error message, given when no more specific message is suitable"
    })
}

module.exports = errorHandler;