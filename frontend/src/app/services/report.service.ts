import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private httpService: HttpService) {}

  getAllReports() {
    return new Promise((resolve, reject) => {
      this.httpService.get('https://api.powerbi.com/v1.0/myorg/reports');
    });
  }
}
