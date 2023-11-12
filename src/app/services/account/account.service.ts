import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  API_SERVER = environment.API_SERVER + '/accounts';

  constructor(private httpClient: HttpClient) {}

  public getAllAccounts(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public save(account: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, account);
  }

  public update(account: any, id: any): Observable<any> {
    return this.httpClient.put(this.API_SERVER + '/' + id, account);
  }

  public delete(id: any): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + '/' + id);
  }

  public validateCredentials(account: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + '/validate', account);
  }
}
