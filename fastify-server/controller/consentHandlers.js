const Consent = require("../models/consent");

const createConsent = async (request, reply) => {
  var _consent = request.body;

  Consent.create(_consent, (err, _) => {
    if (err) {
      reply.send({
        error: err,
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

const updateConsent = (request, reply) => {
  var id = request.params.consentId;
  var newConsentEdit = request.body;

  Consent.findById(id, (err, consent) => {
    if (!err) {
      consent.timestamp = newConsentEdit.timestamp;
      consent.ipaddr = newConsentEdit.ipaddr;
      consent.geoloc = newConsentEdit.geoloc;
      consent.consentval = newConsentEdit.consentval;

      consent.save((er, _) => {
        if (er) {
          reply.send(er);
        }
      });
    } else {
      reply.send({ error: err });
    }
  });
};

const deleteConsent = (request, reply) => {
  var id = request.params.consentId;

  Consent.findById(id, (err, consent) => {
    if (!err) {
      consent.remove((er) => {
        if (!er) {
          reply.send({ consentDeletion: "success" });
        } else {
          reply.send({ error: er });
        }
      });
    } else {
      reply.send({ error: err });
    }
  });
};

module.exports = { createConsent, getConsent, updateConsent, deleteConsent };
