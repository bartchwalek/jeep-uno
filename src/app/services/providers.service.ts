import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {BehaviorSubject, Observable} from 'rxjs';

export interface IProvider {
  name: string;
  title: string;
  description: string;
  urls: {
    title: string;
    url: string;
  }[];
  type: 'online' | 'offline';
}

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  private providers: BehaviorSubject<IProvider[]> = new BehaviorSubject<IProvider[]>([]);
  public providers$: Observable<IProvider[]> = this.providers.asObservable();

  constructor(private data: DataService) {
    this.data.loadAsset<IProvider[]>('providers.json').then(d => this.initialize(d));
  }

  private initialize(data: IProvider[]): void {
    this.providers.next(data);
  }

  public getProviders(): Observable<IProvider[]> {
    return this.providers$;
  }

}
