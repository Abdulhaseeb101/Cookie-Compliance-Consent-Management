const Consent = require("../models/consent");

const createConsent = (request, reply) => {
  var _consent = request.body;

  Consent.create(_consent, (err, consent) => {
    if (err) {
      reply.send({
        error: err,
      });
    } else {
      reply.send({
        status: "creation success",
        consentId: consent.id,
      });
    }
  });
};

const getConsent = (request, reply) => {
  var id = request.params.consentId;

  Consent.findById(id, (err, consent) => {
    if (!err) {
      reply.send(consent);
    } else {
      reply.send({ error: err });
    }
  });
};

const getAllConsent = (request, reply) => {
  Consent.find({}, (err, consents) => {
    if (!err) {
      reply.send(consents);
    } else {
      reply.send({ error: err });
    }
  });
};

const updateConsent = (request, reply) => {
  const id = request.params.consentId;
  const newConsentEdit = request.body;

  Consent.findById(id, (err, consent) => {
    if (err) {
      reply.status(500).send({ error: err });
    } else {
      consent.timestamp = newConsentEdit.timestamp;
      consent.ipaddr = newConsentEdit.ipaddr;
      consent.geoloc = newConsentEdit.geoloc;
      consent.consentval = newConsentEdit.consentval;

      consent.save((er, _) => {
        if (er) {
          reply.status(500).send(er);
        } else {
          reply.send({ status: "updation success" });
        }
      });
    }
  });
};

const deleteConsent = (request, reply) => {
  var id = request.params.consentId;

  Consent.findById(id, (err, consent) => {
    if (!err) {
      try {
        consent.remove((er) => {
          if (!er) {
            reply.send({ consentDeletion: "deletion success" });
          } else {
            reply.send({ error: er });
          }
        });
      } catch (error) {
        console.log("Consent doesn't exist");
      }
    } else {
      reply.send({ error: err });
    }
  });
};

module.exports = {
  createConsent,
  getConsent,
  updateConsent,
  deleteConsent,
  getAllConsent,
};
