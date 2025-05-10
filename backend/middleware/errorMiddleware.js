const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
    }

    const errorHandler = (err, req, res, next) => {
        const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
        let message= err.message;

        //This is for Mongoose validation error
        if(err.name === 'CastError' && err.kind === 'ObjectId'){
            statusCode = 404;
            message = 'Resource not found';
        }
        //Setting the status to whatever the status code variable is
        res.status(statusCode).json({
            message,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack
        });
    }

    export { notFound, errorHandler };