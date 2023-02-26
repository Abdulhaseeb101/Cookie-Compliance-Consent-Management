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
        title: const Text("Consents Info!!"),
        centerTitle: true,
      ),
      body: Column(),
    );
  }
}
