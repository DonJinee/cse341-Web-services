const express = require('express');
const router = express.Router();
const contactsRouter = require('./contacts')

router.get('/contacts', contactsRouter.getAllContacts);

router.get('/contacts/:Id', contactsRouter.getSingleContact);

router.post('/contacts', contactsRouter.createNewContact);

router.put('/contacts/:Id', contactsRouter.updateContact);

router.delete('/contacts/:Id', contactsRouter.deleteContact);

module.exports = router;