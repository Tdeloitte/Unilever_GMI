import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.scss'],
})
export class ExportDataComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
