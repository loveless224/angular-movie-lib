import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IMovie } from "../movies/movie";
@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _movieList = new BehaviorSubject<IMovie[]>([]);
    public movieList$ = this._movieList.asObservable();

    constructor() { }

    updateData(movieList: IMovie[]) {
        this._movieList.next(movieList);
    }
}
