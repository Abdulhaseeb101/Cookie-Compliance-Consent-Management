import 'package:cookie_proj_ui/ConsentRepository.dart';
import 'package:flutter/material.dart';

class ConsentInfoPage extends StatefulWidget {
  final String consentId;
  const ConsentInfoPage({super.key, required this.consentId});

  @override
  State<ConsentInfoPage> createState() => _ConsentInfoPageState();
}

class _ConsentInfoPageState extends State<ConsentInfoPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.redAccent,
          title: const Text("Consents Info!!"),
          centerTitle: true,
        ),
        body: Center(
          child: Column(
            children: [
              FutureBuilder(
                future: ConsentRepository().fetchOneConsent(widget.consentId),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const CircularProgressIndicator();
                  } else if (snapshot.connectionState == ConnectionState.done) {
                    if (snapshot.hasError) {
                      return const Text('Error');
                    } else if (snapshot.hasData) {
                      return SizedBox(
                        height: 250.0,
                        width: 420.0,
                        child: Card(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(50),
                          ),
                          elevation: 20.0,
                          color: Colors.lightBlueAccent,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Text(
                                "Consent Id: ${snapshot.data!.id}",
                                style: const TextStyle(fontSize: 20.0),
                              ),
                              Text(
                                "Consent Timestamp: ${snapshot.data!.timestamp}",
                                style: const TextStyle(fontSize: 20.0),
                              ),
                              Text(
                                "Host IP address: ${snapshot.data!.ipaddr}",
                                style: const TextStyle(fontSize: 20.0),
                              ),
                              Text(
                                "Host Lat Long Values: ${snapshot.data!.geoloc}",
                                style: const TextStyle(fontSize: 20.0),
                              ),
                              Text(
                                "Consent Value: ${snapshot.data!.consentVal}",
                                style: const TextStyle(fontSize: 20.0),
                              ),
                            ],
                          ),
                        ),
                      );
                    } else {
                      return const Text('Empty data');
                    }
                  } else {
                    return Text('State: ${snapshot.connectionState}');
                  }
                },
              ),
              const Divider(),
              const Text(
                "Delete Consent",
                style: TextStyle(fontSize: 80.0, fontWeight: FontWeight.w600),
              ),
              const SizedBox(
                height: 40.0,
              ),
              SizedBox(
                width: 380.0,
                height: 60.0,
                child: TextButton(
                  style: ButtonStyle(
                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ),
                    ),
                    elevation: const MaterialStatePropertyAll(20.0),
                    backgroundColor:
                        const MaterialStatePropertyAll(Colors.redAccent),
                  ),
                  onPressed: () {
                    ConsentRepository().deleteConsent(widget.consentId);
                    Navigator.pop(context);
                  },
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: const [
                      Icon(
                        Icons.delete,
                        size: 40.0,
                        color: Colors.white,
                      ),
                      Text(
                        "Delete Consent",
                        style: TextStyle(fontSize: 35.0, color: Colors.white),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ));
  }
}
