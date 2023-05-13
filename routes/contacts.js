const router = 'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N';
const Contact = require('../model/Contacts');

// Get back all the contacts

const getAllContacts = async (req, res) => {
    /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
    */
    try{
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    }catch(err){
        res.status(500).json(contacts.error);
    }
};

// Get back a specific contact
const getSingleContact = async(req, res) => {
    /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
    */
    try{
        const contact = await Contact.findById(req.params.Id);
        res.status(200).json(contact);
    }catch(err){
        res.status(500).json(contact.error);
    }
};

// Enter a new contact
const createNewContact = async(req, res) => {
    /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
    */
    const contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    });
    try {
        const savedContact = await contact.save();
        res.status(201).json(savedContact);
    }catch(err){
        res.status(500).json(savedContact.error)
    }
};

// Update a contact
const updateContact = async (req, res) => {
    /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
    */
    try{
        const updatedContact = await Contact.updateOne(
            {_id: req.params.Id},
            {$set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                favoriteColor: req.body.favoriteColor,
                birthday: req.body.birthday
            }}
        );
        res.status(204).json(updatedContact)
    }catch(err) {
        res.status(500).json({message: err} || 'Update Error!!!');
    }
};

// Delete a contact
const deleteContact = async(req, res) => {
    /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
    */
    try{
        const deletedContact = await Contact.deleteOne({_id: req.params.Id});
        res.status(204).json(deletedContact)
    }catch(err){
        res.status(500).json({message: err})
    }
};

module.exports = {getAllContacts, getSingleContact, createNewContact, updateContact, deleteContact};