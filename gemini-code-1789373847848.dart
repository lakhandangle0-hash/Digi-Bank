import 'package:flutter/material.dart';

void main() => runApp(const DigiBankApp());

class DigiBankApp extends StatelessWidget {
  const DigiBankApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Digi Bank',
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: const Color(0xFF0F172A),
        primaryColor: const Color(0xFF2563EB),
      ),
      home: Scaffold(
        appBar: AppBar(title: const Text("DIGI BANK")),
        body: Center(
          child: Container(
            padding: const EdgeInsets.all(24),
            decoration: BoxDecoration(
              color: const Color(0xFF1D4ED8),
              borderRadius: BorderRadius.circular(16),
            ),
            child: const Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text("DIGI BANK BALANCE", style: TextStyle(color: Colors.white70, fontSize: 12)),
                SizedBox(height: 8),
                Text("2,500.00 DIGI", style: TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.bold)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}