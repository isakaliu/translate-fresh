import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateFreshService {

  constructor(private http: HttpClient) {
    this.setDefaultLanguage();
  }
  Language = new BehaviorSubject({});
  defaultLanguage = new BehaviorSubject(localStorage.getItem('language'));

  getLanguageValues(): any{
    return this.http.get(`http://localhost:4200/Languages/${this.defaultLanguage.value}.json`)
      .subscribe(data => {
        this.Language.next(data);
      })
  }
  getLocalStorageLanguage(): any{
    return localStorage.getItem('language');
  }

  setDefaultLanguage(): any{
    const storageLanguage = localStorage.getItem('language');
    if(storageLanguage === null || storageLanguage === undefined){
      this.defaultLanguage.next('EN');
      localStorage.setItem('language', 'EN');
    }else{
      this.defaultLanguage.next(this.getLocalStorageLanguage());
    }
  }
  get(key: string): any{
    let value;
    const language: any = this.Language.value;
    if(language.hasOwnProperty(key)){
      value = language[key];
    }
    return value;
  }
}
