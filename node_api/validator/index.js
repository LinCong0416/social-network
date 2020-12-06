
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

exports.userSignupValidator = (req, res, next) => {
    //name is not null and between 4 to 10 characters
    req.check("name", "Name is required").notEmpty();
    //email is not null, valid and normalized
    req.check("email","Email must between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contains @")
        .isLength({
            min: 4,
            max:2000
        })
    //check password
    req.check("password", "Password is required").notEmpty();
    req.check('password')
        .isLength({
            min: 6
        })
        .withMessage("Password must contains least 6 characters")
        .matches(/\d/)
        .withMessage("Password must contains a number")
    //check errs
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
};










