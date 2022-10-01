import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Order } from '../interfaces/order';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public urlPath = "http://localhost:3000/"
public loginFlag=false
  constructor(private http:HttpClient,private router :Router) {

  }
  public navbarFlag = false
  public userInfo:any={}
  public order:Order = {
    products:[],
    totalPrice:0,
    userId:0
    };
isAdmin:boolean=false
getAllProducts():Observable<any>{
  return this.http.get(`${this.urlPath}products/all`)
}
getSingleProduct(id:any):Observable<any>{
  return this.http.get(`${this.urlPath}products/singleProduct/${id}`)
}
EditProduct(id:any,obj:any):Observable<any>{
  return this.http.patch(`${this.urlPath}products/EditProduct/${id}`,obj)
}
    getSingle(id:any):Observable<any>{
      return this.http.get(`${this.urlPath}products/singleProduct/${id}`)
    }
    getSingleUser(id:any):Observable<any>{
      return this.http.get(`${this.urlPath}user/all/${id}`)

    }
    upload(id:any,obj:any):Observable<any>{
      return this.http.post(`${this.urlPath}user/uploadImage/${id}`,obj)
    }

    addProduct(obj:any):Observable <any>{
      return this.http.post(`${this.urlPath}products/addProduct`,obj)
      }
      Login(obj:any):Observable<any>{
        return this.http.post(`${this.urlPath}user/login`,obj)
      }
      userImage(obj:any,id:any):Observable<any>{
        return this.http.post(`${this.urlPath}user/upload/${id}`,obj)
      }

      authMe():Observable<any>{
        return this.http.get(`${this.urlPath}user/profile`)
        }
      Logout():Observable<any>{
            return this.http.get(`${this.urlPath}user/logout`)
      }
      allUsers():Observable<any>{
        return this.http.get(`${this.urlPath}user/all`)
      }
      EditUser(id:any,obj:any):Observable<any>{
        return this.http.patch(`${this.urlPath}user/all/${id}`,obj)
      }
      getProducts(pageNum:any):Observable<any>{
        return this.http.get(`${this.urlPath}products/all?pageNum=${pageNum}&pageLimit=2`)
        // http://localhost:3000/products/all?pageNum=2&pageLimit=2
      }
      getAllCategories():Observable<any>{
        return this.http.get(`${this.urlPath}category/show`)
      }
      deleteUser(id:any):Observable<any>{
        return this.http.delete(`${this.urlPath}user/all/${id}`)
      }
      EditCate(id:any,obj:any):Observable<any>{
        return this.http.patch(`${this.urlPath}category/edit/${id}`,obj)
      }
      deleteCate(id:any):Observable<any>{
return this.http.delete(`${this.urlPath}category/delete/${id}`)
      }
      GetSingleCate(id:any):Observable<any>{
        return this.http.get(`${this.urlPath}category/show/${id}`)
      }
      addCategory(obj:any):Observable<any>{
        return this.http.post(`${this.urlPath}category/addCategory`,obj)
      }
      deleteProduct(id:any):Observable<any>{
        return this.http.delete(`${this.urlPath}products/deleteProduct/${id}`)
      }
      makeOrder(obj:any,id:any):Observable<any>{
      return this.http.post(`${this.urlPath}user/order/${id}`,obj)
      }
      register(obj:any): Observable <any>{
        return this.http.post(`${this.urlPath}user/register`,obj)
      }
      ProductImage(obj:any,id:any):Observable<any>{
return this.http.post(`${this.urlPath}products/uploadImage/${id}`,obj)
      }

}
