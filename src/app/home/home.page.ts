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
  dataMahasiswa = [
    {
      "no": 1,
      "first_name": "Alia",
      "last_name": "Maulana Resti",
      "latitude": -7.8667599,
      "longitude": 110.3214134
    },
    {
      "no": 2,
      "first_name": "ALYA",
      "last_name": "SYAHIDHA",
      "latitude": -7.7867386,
      "longitude": 110.5948413
    },
    // Tambahkan data lainnya dari file JSON...
  ];

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    // Inisialisasi peta
    this.map = L.map('mapId').setView([-7.797068, 110.370529], 10);

    // Tambahkan layer basemap
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(this.map);

    // Tambahkan marker untuk setiap mahasiswa
    this.dataMahasiswa.forEach(mahasiswa => {
      const customIcon = L.divIcon({
        html: '<i class="fa-solid fa-location-dot" style="font-size: 24px; color: red;"></i>',
        className: 'custom-div-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 24],
      });

      const marker = L.marker([mahasiswa.latitude, mahasiswa.longitude], { icon: customIcon })
        .addTo(this.map)
        .bindPopup(`<b>${mahasiswa.first_name} ${mahasiswa.last_name}</b>`);
    });
  }
}