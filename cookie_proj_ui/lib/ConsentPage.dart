import 'package:cookie_proj_ui/ConsentInfoPage.dart';
import 'package:cookie_proj_ui/ConsentRepository.dart';
import 'package:flutter/material.dart';

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
            icon: Icon(Icons.refresh_outlined)),
        title: const Text("All Consents!!"),
        centerTitle: true,
        backgroundColor: Colors.redAccent,
      ),
      body: Column(
        children: [
          FutureBuilder(
            future: ConsentRepository().getAllConsents(),
            builder: (context, snapshot) {
              if (snapshot.connectionState == ConnectionState.done) {
                if (snapshot.hasError) {
                  return Text(snapshot.error.toString());
                }
                return ListView.builder(
                  shrinkWrap: true,
                  scrollDirection: Axis.vertical,
                  itemCount: snapshot.data!.length,
                  itemBuilder: (context, index) {
                    return ListTile(
                      leading: const Icon(Icons.perm_identity),
                      title: Text(snapshot.data![index].id),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => ConsentInfoPage(
                                    consentId: snapshot.data![index].id,
                                  )),
                        ).then((value) => setState(() {}));
                      },
                    );
                  },
                );
              } else {
                return const CircularProgressIndicator();
              }
            },
          ),
        ],
      ),
    );
  }
}
