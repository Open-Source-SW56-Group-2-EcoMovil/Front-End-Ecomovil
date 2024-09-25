import {Injectable, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanesApiService {
  private specificCategory: string  = 'planes';
  private baseUrl: string = 'http://localhost:3000';
  private http: HttpClient = inject(HttpClient);

  /**
   * @method getSources
   * @description
   * Fetches the university.
   * @returns An observable of the Universities.
   */
  getSources() {
    return this.http.get(`${this.baseUrl}/${this.specificCategory}`);
  }

  /**
   * @method initUniversities
   * @description
   * Initializes the universities.
   * @returns An observable of the universities.
   */
  initUniversities() {
    return this.getSources();
  }
}
