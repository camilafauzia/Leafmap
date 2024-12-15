import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  // Data mahasiswa
  dataCagarBudaya = [
    {
      "no": 1,
      "nama_cagarbudaya": "Pusat Konservasi Cagar Budaya",
      "rate": 4.6,
      "review": "(12)",
      "detail_alamat": "Jakarta History Museum, Jl. Pintu Besar Utara No.12 3, RT.4/RW.6",
      "kota": "Jakarta",
      "full_address": "Pusat Konservasi Cagar Budaya Jakarta History Museum, Jl. Pintu Besar Utara No.12 3, RT.4/RW.6 Jakarta",
      "latitude": -6.1363252,
      "longitude": 106.8132425
    },
    {
      "no": 2,
      "nama_cagarbudaya": "Perkampungan Budaya Betawi",
      "rate": 4.6,
      "review": "(333)",
      "detail_alamat": "Jalan.H.Mali No.23 12, RT.12/RW.8",
      "kota": "Jakarta",
      "full_address": "Perkampungan Budaya Betawi Jalan.H.Mali No.23 12, RT.12/RW.8 Jakarta",
      "latitude": -6.3408172,
      "longitude": 106.8224076
    },
    {
      "no": 3,
      "nama_cagarbudaya": "Unit Pengelola Kawasan Perkampungan Budaya Betawi Setu Babakan",
      "rate": 4.5,
      "review": "(10,095)",
      "detail_alamat": "·",
      "kota": "Jakarta",
      "full_address": "Unit Pengelola Kawasan Perkampungan Budaya Betawi Setu Babakan · Jakarta",
      "latitude": -6.338294,
      "longitude": 106.825429
    },
    {
      "no": 4,
      "nama_cagarbudaya": "Cagar Buah Condet",
      "rate": 4.6,
      "review": "(75)",
      "detail_alamat": "Jl. Kayu Manis No.3 7, RT.7/RW.5",
      "kota": "Jakarta",
      "full_address": "Cagar Buah Condet Jl. Kayu Manis No.3 7, RT.7/RW.5 Jakarta",
      "latitude": -6.2870643,
      "longitude": 106.8504208
    },
    {
      "no": 5,
      "nama_cagarbudaya": "Kranggan Pusat Cagar Budaya",
      "rate": 4.9,
      "review": "(19)",
      "detail_alamat": "JWMM+58F, RT.001/RW.004",
      "kota": "Jakarta",
      "full_address": "Kranggan Pusat Cagar Budaya JWMM+58F, RT.001/RW.004 Jakarta",
      "latitude": -6.367071,
      "longitude": 106.933311
    },
    {
      "no": 6,
      "nama_cagarbudaya": "Cagar Budaya Nasional \"Lambang Negara RI",
      "rate": 5,
      "review": "(2)",
      "detail_alamat": "Jl. Al Maruf No.4, RT.10/RW.3",
      "kota": "Jakarta",
      "full_address": "Cagar Budaya Nasional \"Lambang Negara RI\" Jl. Al Maruf No.4, RT.10/RW.3 Jakarta",
      "latitude": -6.2884363,
      "longitude": 106.8116472
    },
    {
      "no": 7,
      "nama_cagarbudaya": "Cagar Budaya Batu Penggilingan",
      "rate": "",
      "review": "",
      "detail_alamat": "10, Jl. Kali Buaran No.2, RT.10/RW.7",
      "kota": "Jakarta",
      "full_address": "Cagar Budaya Batu Penggilingan 10, Jl. Kali Buaran No.2, RT.10/RW.7 Jakarta",
      "latitude": -6.199854,
      "longitude": 106.9320401
    },
    {
      "no": 8,
      "nama_cagarbudaya": "Toko Merah",
      "rate": 4.6,
      "review": "(3,374)",
      "detail_alamat": "Pinang Siang, Jl. Kali Besar Barat No.11 7, RT.7/RW.3",
      "kota": "Jakarta",
      "full_address": "Toko Merah Pinang Siang, Jl. Kali Besar Barat No.11 7, RT.7/RW.3 Jakarta",
      "latitude": -6.1218293,
      "longitude": 106.8163628
    },
    {
      "no": 9,
      "nama_cagarbudaya": "Museum Kebaharian Jakarta Rumah Si Pitung",
      "rate": 4.5,
      "review": "(1,705)",
      "detail_alamat": "Jl. Kampung Marunda Pulo, 2, RT.2/RW.7",
      "kota": "Jakarta",
      "full_address": "Museum Kebaharian Jakarta Rumah Si Pitung Jl. Kampung Marunda Pulo, 2, RT.2/RW.7 Jakarta",
      "latitude": -6.0969637,
      "longitude": 106.9588413
    },
    {
      "no": 10,
      "nama_cagarbudaya": "Gedung Kesenian Jakarta",
      "rate": 4.6,
      "review": "(2,760)",
      "detail_alamat": "·",
      "kota": "Jakarta",
      "full_address": "Gedung Kesenian Jakarta · Jakarta",
      "latitude": -6.1671658,
      "longitude": 106.8353905
    },
    {
      "no": 11,
      "nama_cagarbudaya": "Rumah Dokter Cagar Budaya Pulau Onrust",
      "rate": 4,
      "review": "(1)",
      "detail_alamat": "XP8P+662",
      "kota": "Jakarta",
      "full_address": "Rumah Dokter Cagar Budaya Pulau Onrust XP8P+662 Jakarta",
      "latitude": -6.0344875,
      "longitude": 106.7355156
    },
    {
      "no": 12,
      "nama_cagarbudaya": "Bentara Budaya Jakarta",
      "rate": 4.6,
      "review": "(2,431)",
      "detail_alamat": "·",
      "kota": "Jakarta",
      "full_address": "Bentara Budaya Jakarta · Jakarta",
      "latitude": -6.2102742,
      "longitude": 106.7955008
    },
    {
      "no": 13,
      "nama_cagarbudaya": "Situs Cagar Budaya Sumur 7 ke 1",
      "rate": 4.8,
      "review": "(126)",
      "detail_alamat": "Jl. Keramat Jaya I No.19B, RT.1/RW.12",
      "kota": "Jakarta",
      "full_address": "Situs Cagar Budaya Sumur 7 ke 1 Jl. Keramat Jaya I No.19B, RT.1/RW.12 Jakarta",
      "latitude": -6.1944491,
      "longitude": 106.8229198
    },
    {
      "no": 14,
      "nama_cagarbudaya": "Situs betawi",
      "rate": 5,
      "review": "(2)",
      "detail_alamat": "Jl. Moch Kahfi II No.28, RW.8",
      "kota": "Jakarta",
      "full_address": "Situs betawi Jl. Moch Kahfi II No.28, RW.8 Jakarta",
      "latitude": -6.3387306,
      "longitude": 106.8251032
    },
    {
      "no": 15,
      "nama_cagarbudaya": "Gedung Candra Naya",
      "rate": 4.6,
      "review": "(751)",
      "detail_alamat": "·",
      "kota": "Jakarta",
      "full_address": "Gedung Candra Naya · Jakarta",
      "latitude": -6.1473838,
      "longitude": 106.8151338
    }
    // Tambahkan data lainnya dari file JSON...
  ];

  constructor() { }

  ngOnInit() { }

  ionViewDidEnter() {
    // Inisialisasi peta
    this.map = L.map('mapId').setView([-6.181254720607123, 106.82469412121914], 10);

    // Tambahkan layer basemap
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(this.map);

    // Tambahkan marker untuk setiap mahasiswa
    this.dataCagarBudaya.forEach(cabud => {
      const customIcon = L.divIcon({
        html: '<i class="fa-solid fa-location-dot" style="font-size: 24px; color: brown;"></i>',
        className: 'custom-div-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 24],
      });

      const marker = L.marker([cabud.latitude, cabud.longitude], { icon: customIcon })
        .addTo(this.map)
        .bindPopup(`<b>${cabud.nama_cagarbudaya} </b>`);
    });
  }
}