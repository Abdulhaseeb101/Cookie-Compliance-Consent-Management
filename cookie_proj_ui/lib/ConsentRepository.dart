import 'package:cookie_proj_ui/Consent.dart';
import 'package:http/http.dart' as http;

class ConsentRepository {
  String DB_URL = "127.0.0.1/api/v1/";

  Future<List<Consent>> listAllConsents() async {
    var reqURL = DB_URL + "getall";

    var respBody = await http.get(Uri.parse(reqURL));

    respBody.body
  }
}

void main() {
  var url = 'https://jsonplaceholder.typicode.com/todos/1';

  http.get(Uri.parse(url)).then((response) {
    print('Response status: ${response.statusCode}');
    print('Response body: ${response.body}');
  });
}
