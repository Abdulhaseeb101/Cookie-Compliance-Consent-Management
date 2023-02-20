import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class GetAllConsentPage extends StatefulWidget {
  const GetAllConsentPage({super.key});

  @override
  State<GetAllConsentPage> createState() => _GetAllConsentPageState();
}

class _GetAllConsentPageState extends State<GetAllConsentPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("All Consents!!"),
        centerTitle: true,
      ),
      body: Column(
        children: [],
      ),
    );
  }
}
