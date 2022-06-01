import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchTeam } from '../../work-team/models/team';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getRandomTeachers() {
    return this.http.get<SearchTeam[]>(`${environment.urlAPI}/teacher/random`);
  }
}
