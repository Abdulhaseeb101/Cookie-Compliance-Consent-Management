import 'package:flutter/material.dart';

class Consent {
  String id;
  String timestamp;
  String ipaddr;
  String geoloc;
  String consentVal;

  Consent(this.id, this.timestamp, this.ipaddr, this.geoloc, this.consentVal);
}
