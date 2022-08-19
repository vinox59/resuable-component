import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './countries.service';
import { IcountryDetail } from '../app/dropdown';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CountriesService]
    });
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API via GET', () => {
    service.getCountries('europe').subscribe((reult: any) => {
      expect(reult.length).toBe(53);
    });
  });
});
