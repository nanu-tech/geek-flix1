import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private ROOT_URL = 'https://api.themoviedb.org/3/movie/550?api_key=4bd7b5e675d3f7824e3fc7276ab255c8'

  constructor(private http: HttpClient ) { }

  getMoviesFromHttp(){
    return this.http.get<Movie[]>(this.ROOT_URL)
  }

  movieFromHttp()
    
  }
}
