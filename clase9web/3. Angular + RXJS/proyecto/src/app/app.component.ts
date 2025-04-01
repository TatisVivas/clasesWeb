import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { mergeMap, Observable, of } from 'rxjs';
import { User } from './models/User';
import { Post } from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ROOT_URL = 'https://jsonplaceholder.typicode.com/';
  title = 'RXJS Example';

  txtUser: string = '';
  publicacion: Post | null = null;
  //inyectar dependencias a traves del constructor
  constructor(private http: HttpClient) {}
 // user$: Observable<any> = new Observable();

  usuario: User | null=null;
  
  searchUser() {
    /*
    this.user$ = this.http.get(this.ROOT_URL + 'users/' +1);
    this.user$.subscribe( userInfo => {
      this.usuario = userInfo;
    });
    

    this.http.get<User>(this.ROOT_URL + 'users/' + this.txtUser).subscribe( (userInfo: any) => {
      this.usuario = userInfo;
    });
    */
/*
    this.http.get<User>(`${this.ROOT_URL}users?username=${this.txtUser}`).subscribe({
      next: (userInfo:any)=>{ // Assuming the API returns an array of users
        if (userInfo.length > 0) {
          this.usuario = userInfo[0]; // Get the first user
        }else{
          this.usuario = null; // No user found
        }
    }});
    */
    this.getUserAndPost();
    }


    //apenas cargue ponga el usuario 1
    ngOnInit() {
      this.http.get<User>(this.ROOT_URL + 'users/' + 1).subscribe((userInfo: any) => {
        this.usuario = userInfo;
      });
      //this.getPost(this.usuario!.id);
    }

    getPost(id:Number){
        this.http.get<Post>(this.ROOT_URL + 'posts?userId=' + id).subscribe((postInfo: any) => {
          this.publicacion = postInfo[0];
      });
    }

    getUserAndPost() {
      this.http.get<User>(this.ROOT_URL + 'users?username=' + this.txtUser).pipe(
        mergeMap((userInfo: any) => {
          if (userInfo.length > 0) {
            this.usuario = userInfo[0]; // Get the first user
            return this.http.get<Post>(this.ROOT_URL + 'posts?userId=' + this.usuario!.id);
          } else {
            this.usuario = null; // No user found
            return of(0); // Return an observable with null
          }
        })
      ).subscribe((postInfo: any) => {
        this.publicacion = postInfo ? postInfo[0] : null; // Handle the post response
      });
    }
}