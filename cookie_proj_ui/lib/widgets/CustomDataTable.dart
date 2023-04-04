import 'package:flutter/material.dart';

import '../ConsentInfoPage.dart';
import '../models/Consent.dart';

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
            border: TableBorder.all(color: Colors.blueAccent),
            columns: const [
              DataColumn(label: Text("Consent Id")),
              DataColumn(label: Text("Timestamp")),
              DataColumn(label: Text("Ip Address")),
              DataColumn(label: Text("More..")),
            ],
            rows: widget.allConsents
                .map((con) => DataRow(
                      cells: [
                        DataCell(
                          Text(con.id),
                        ),
                        DataCell(Text(con.timestamp.toString())),
                        DataCell(Text(con.ipaddr)),
                        DataCell(IconButton(
                          icon: const Icon(Icons.menu),
                          onPressed: () => {
                            Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => ConsentInfoPage(
                                        consentId: con.id,
                                      )),
                            )
                          },
                        )),
                      ],
                    ))
                .toList(),
          ),
        ]);
  }
}
