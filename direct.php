<?php
// Mulai atau lanjutkan sesi
session_start();

// Daftar link yang akan digunakan secara bergantian
$links = array(
    'https://www.highcpmgate.com/dvm2zgjx6w?key=40b33d39d469660e445872b4aed08c57',
    '/',
);

// Periksa jika variabel sesi terakhir diatur, jika tidak, atur ke -1 untuk mulai dari awal
$lastIndex = isset($_SESSION['last_index']) ? $_SESSION['last_index'] : -1;

// Pilih indeks berikutnya dalam urutan link
$nextIndex = ($lastIndex + 1) % count($links);

// Ambil URL yang sesuai dengan indeks yang dipilih
$redirectUrl = $links[$nextIndex];

// Simpan indeks terakhir ke variabel sesi
$_SESSION['last_index'] = $nextIndex;

// Redirect pengunjung ke URL yang dipilih
header("Location: $redirectUrl");
exit;
?>
