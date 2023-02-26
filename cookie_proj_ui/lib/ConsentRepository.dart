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
}
