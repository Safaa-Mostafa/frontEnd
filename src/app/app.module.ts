import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowSingleComponent } from './pages/show-single/show-single.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { LoginComponent } from './pages/login/login.component';
import { InterceptorInterceptor } from './interceptors/interceptor.interceptor';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { UsersInfoComponent } from './users-info/users-info.component';
import { GetcategoriesComponent } from './pages/getcategories/getcategories.component';
import { SingleUserCateComponent } from './pages/single-user-cate/single-user-cate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerDataComponent } from './pages/edit-customer-data/edit-customer-data.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AddCartComponent } from './pages/add-cart/add-cart.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RegisterComponent } from './pages/register/register.component';
import { EditPicComponent } from './pages/edit-pic/edit-pic.component';
import { UploadProductImgComponent } from './pages/upload-product-img/upload-product-img.component';
import { AllproductsComponent } from './pages/allproducts/allproducts.component';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';
import { EditproductComponent } from './pages/editproduct/editproduct.component';
import { EditpicproductComponent } from './pages/editpicproduct/editpicproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShowSingleComponent,
    AddProductComponent,
    LoginComponent,
    TestComponent,
    ProfileComponent,
    SidebarComponent,
    UsersInfoComponent,
    GetcategoriesComponent,
    SingleUserCateComponent,
    EditCustomerDataComponent,
    AddcategoryComponent,
    EditCategoryComponent,
    UserPageComponent,
    AddCartComponent,
    CartComponent,
    CheckoutComponent,
    RegisterComponent,
    EditPicComponent,
    UploadProductImgComponent,
    AllproductsComponent,
    SingleproductComponent,
    EditproductComponent,
    EditpicproductComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
   { provide:HTTP_INTERCEPTORS,
    useClass:InterceptorInterceptor,
    multi:true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
