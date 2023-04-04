import 'package:cookie_proj_ui/ConsentInfoPage.dart';
import 'package:cookie_proj_ui/ConsentRepository.dart';
import 'package:cookie_proj_ui/models/Consent.dart';
import 'package:flutter/material.dart';

import 'widgets/CustomDataTable.dart';

class ConsentPage extends StatefulWidget {
  const ConsentPage({super.key});

  @override
  State<ConsentPage> createState() => _ConsentPageState();
}

class _ConsentPageState extends State<ConsentPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
            onPressed: () => setState(() {}),
            icon: const Icon(Icons.refresh_outlined)),
        title: const Text("All Consents!!"),
        centerTitle: true,
        backgroundColor: Colors.redAccent,
      ),
      body: Center(
        child: FutureBuilder(
          future: ConsentRepository().getAllConsents(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              if (snapshot.hasError) {
                return Text(snapshot.error.toString());
              }
              return CustomDataTable(allConsents: snapshot.data!);
            } else {
              return const CircularProgressIndicator();
            }
          },
        ),
      ),
    );
  }
}
