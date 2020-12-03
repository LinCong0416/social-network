
exports.createPostValidator = (req, res, next) => {
    req.checkBody("title", "Write a title").notEmpty();
    req.checkBody("title", 'Title must be between 4 to 150 characters').isLength({
        min: 4,
        max: 150
    });

    req.checkBody('body', "Write a body").notEmpty();
    req.checkBody('body', 'Body must be between 4 to 2000 characters').isLength({
        min: 4,
        max: 2000
    });
    //check for errs

    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
};