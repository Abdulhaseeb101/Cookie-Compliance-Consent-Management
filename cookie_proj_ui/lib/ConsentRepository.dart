import 'package:cookie_proj_ui/models/Consent.dart';
import 'package:dio/dio.dart';

class ConsentRepository {
  final Dio _dio = Dio(BaseOptions(baseUrl: "http://127.0.0.1:3000/api/v1/"));

  Future<List<Consent>> getAllConsents() async {
    List<Consent> allConsents = [];

    Response resp = await _dio.get("/getall");

    for (var consent in resp.data) {
      allConsents.add(Consent.fromJson(consent));
    }

    return allConsents;
  }

  Future<Consent> fetchOneConsent(String consentId) async {
    Response resp = await _dio.get("/getcon/$consentId");

    var ref = resp.data;
    Consent consent = Consent.fromJson(ref);

    return consent;
  }

  void deleteConsent(String consentId) async {
    await _dio.put("/deletecon/$consentId");
  }
}
