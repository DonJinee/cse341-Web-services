const nameFunction = (req, res, next) => {
    res.json('Utibe Omachona');
}

const secNameFunction = (req, res, next) => {
    res.json('Richard Omachona');
}

module.exports = {nameFunction, secNameFunction};