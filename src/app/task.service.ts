import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks$: Observable<string []> = new Observable();
  constructor() { }
}
