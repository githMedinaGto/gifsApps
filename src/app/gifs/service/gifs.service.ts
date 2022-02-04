import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private keys: string[] = [];
  private _historial:string[]=[];
  public resultados: any[] = [];

  get historial(){
    return [...this._historial];
    
  }

  constructor(private http: HttpClient){
    
  }

  async BuscarGifs(query:string=''){
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);
     
   }
     console.log(this._historial);

    /*const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=nyyZus8e1QUqUeelmvgkTf0FlERACLon&q=dragon ball z&limit=10').then(resp => {
      resp.json().then(data => {
        console.log(data);
      })
    })*/
    /*const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=nyyZus8e1QUqUeelmvgkTf0FlERACLon&q=dragon ball z&limit=10')
    const data = await resp.json();
    console.log(data);*/
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=nyyZus8e1QUqUeelmvgkTf0FlERACLon&q=dragon ball z&limit=10`).
    subscribe((resp : any) => {
      console.log(resp.data);
      this.resultados= resp.data;
    });
  }



}
