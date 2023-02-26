import 'dart:convert';

import 'package:cookie_proj_ui/models/Consent.dart';
import 'package:dio/dio.dart';

class ConsentRepository {

  final Dio _dio = Dio(BaseOptions(baseUrl: "http://192.16.43.22:3000/api/v1/"));

  Future<List<Consent>> getAllConsents() async {
    List<Consent> allConsents = [];

    Response resp = await _dio.get("/getall");

    for(var consent in resp.data) {
      allConsents.add(Consent.fromJson(consent));
    }

    return allConsents;
  }
}
