import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable({ providedIn: 'root' }) //Esto es para poder usar el servicio en toda la APP. Si no tiene esto, hay que proveerlo y exportarlo de forma manual.
export class GifsService {
  //Vamos a crear un array para guardar los gifs que recibimos.
  //Lo declaramos publico y como un arreglo vacio que se irá llenando.

  public gifList: Gif[] = [];

  //Creamos un metodo para que guarde de forma privada el historial

  private _tagsHistory: string[] = [];
  private apiKey: string = 'DFc8lM7IfDnXcFHRpGpI9Ra7l5hJu61N'; //link a la api donde me he registrado
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  //Para no cargar de logica el searchTag ya que su función es simplemente buscar un gif, vamos a crear más metodos para validaciones

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase(); //Para no liarnos, siempre lo que ponga lo pasamos a minúscula (aunque se vea bonito con el pipe)

    //Esto dice que si el historial ya incluye el mismo tag cree un nuevo historial removiendo lo que ya este duplicado.
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    //Y ahora al igual que antes, colocamos el tag al inicio
    this._tagsHistory.unshift(tag);

    //Limitar el array a 10

    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  //Ahora vamos a hacer un metodo para poner lo que se esta buscando al inicio del array _tagsHistory
  //Tag es siempre lo que has buscado. Lo que has puesto en el input.

  searchTag(tag: string): void {
    //aqui vamos a validar cosas para LUCHAR CONTRA EL USUARIO
    //Si el string que recibe esta vacío, no añade nada.

    if (tag.length === 0) return;
    this.organizeHistory(tag); //Esto es para llamar al metodo de arriba y poder usarlo.

    //HACEMOS LA PETICION AQUÍ

    //Para que la url no tenga tanta info y sea tan larga, creamos un objeto con lo que estamos mandando en la peticion.
    //HttpParams ya te lo trae angular.

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search/`, { params }) //SearchResponse es la interfaz que creamos con la web.
      .subscribe((resp) => {
        //Suscribe es para que el componente este atento a lo que devuelve. En este caso la resp

        this.gifList = resp.data; //la lista de gif va a ser igual a los gif que se recuperan en la respuesta de la petición.
        console.log({ gifs: this.gifList });
      });
  }
}

//El servicio hay que usarlo en el componente que queramos. En este caso en el search-box.component.ts
