import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  reportType = new BehaviorSubject<String>("Home");
  constructor() { }
}
