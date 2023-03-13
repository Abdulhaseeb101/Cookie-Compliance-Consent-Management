class Consent {
  String id;
  String timestamp;
  String ipaddr;
  String geoloc;
  Map<String, dynamic> consentVal;

  Consent(
      {required this.id,
      required this.timestamp,
      required this.ipaddr,
      required this.geoloc,
      required this.consentVal});

  factory Consent.fromJson(Map<String, dynamic> json) => Consent(
        id: json["_id"],
        timestamp: json["timestamp"],
        ipaddr: json["ipaddr"],
        geoloc: json["geoloc"],
        consentVal: json["consentval"],
      );
}
