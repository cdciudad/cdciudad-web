import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchTeam } from '../models/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getAllTeacher() {
    return this.http.get<SearchTeam[]>(`${environment.urlAPI}/teacher`);
  }

  getAllStaff() {
    return this.http.get<SearchTeam[]>(`${environment.urlAPI}/staff`);
  }
}
