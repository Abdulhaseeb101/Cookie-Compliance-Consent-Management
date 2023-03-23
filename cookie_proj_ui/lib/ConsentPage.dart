import 'package:cookie_proj_ui/ConsentInfoPage.dart';
import 'package:cookie_proj_ui/ConsentRepository.dart';
import 'package:cookie_proj_ui/models/Consent.dart';
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
      body: Center(
        child: FutureBuilder(
          future: ConsentRepository().getAllConsents(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              if (snapshot.hasError) {
                return Text(snapshot.error.toString());
              }
              // return ListView.builder(
              //   shrinkWrap: true,
              //   scrollDirection: Axis.vertical,
              //   itemCount: snapshot.data!.length,
              //   itemBuilder: (context, index) {
              //     return ListTile(
              //       leading: const Icon(Icons.perm_identity),
              //       title: Text(snapshot.data![index].id),
              //       onTap: () {
              //         Navigator.push(
              //           context,
              //           MaterialPageRoute(
              //               builder: (context) => ConsentInfoPage(
              //                     consentId: snapshot.data![index].id,
              //                   )),
              //         ).then((value) => setState(() {}));
              //       },
              //     );
              //   },
              // );
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

class CustomDataTable extends StatefulWidget {
  final List<Consent> allConsents;
  const CustomDataTable({
    super.key,
    required this.allConsents,
  });

  @override
  State<CustomDataTable> createState() => _CustomDataTableState();
}

class _CustomDataTableState extends State<CustomDataTable> {
  @override
  Widget build(BuildContext context) {
    return ListView(
        shrinkWrap: true,
        scrollDirection: Axis.vertical,
        children: [
          DataTable(
            columns: const [
              DataColumn(label: Text("Consent Id")),
              DataColumn(label: Text("Timestamp")),
              DataColumn(label: Text("Ip Address")),
            ],
            rows: widget.allConsents
                .map((con) => DataRow(
                      cells: [
                        DataCell(Text(con.id),
                            onTap: () => {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) => ConsentInfoPage(
                                              consentId: con.id,
                                            )),
                                  ).then((value) => setState(() {}))
                                }),
                        DataCell(Text(con.timestamp)),
                        DataCell(Text(con.ipaddr)),
                      ],
                    ))
                .toList(),
          ),
        ]);
  }
}
