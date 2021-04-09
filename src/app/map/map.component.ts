import { Component, OnInit } from '@angular/core';
import OlMap from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import * as Proj from 'ol/proj';
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: any;
  view: any;
  layer: any;

  constructor() { }

  ngOnInit(): void {
    this.layer = new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    });

    this.view = new OlView({
      center: Proj.fromLonLat([-15.60, 27.950]),
      zoom: 10,
      minZoom: 2,
      maxZoom: 14,
    });
    this.map = new OlMap({
      target: 'map',
      layers: [this.layer],
      view: this.view
    });
  }
}
