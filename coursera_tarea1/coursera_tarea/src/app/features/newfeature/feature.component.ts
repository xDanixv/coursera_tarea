
import { Component, OnInit } from '@angular/core';
import { isAndroid } from '@nativescript/core';

@Component({
  selector: 'ns-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  androidMessage: string = '';

  ngOnInit(): void {
    if (isAndroid) {
      this.androidMessage = 'Este mensaje solo aparece en Android';
    }
  }
}
