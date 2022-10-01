import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateeeGuard } from './guards/can-deactivateee.guard';
import { AddCartComponent } from './pages/add-cart/add-cart.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { AllproductsComponent } from './pages/allproducts/allproducts.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { EditCustomerDataComponent } from './pages/edit-customer-data/edit-customer-data.component';
import { EditPicComponent } from './pages/edit-pic/edit-pic.component';
import { EditpicproductComponent } from './pages/editpicproduct/editpicproduct.component';
import { EditproductComponent } from './pages/editproduct/editproduct.component';
import { GetcategoriesComponent } from './pages/getcategories/getcategories.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShowSingleComponent } from './pages/show-single/show-single.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { SingleUserCateComponent } from './pages/single-user-cate/single-user-cate.component';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';
import { UploadProductImgComponent } from './pages/upload-product-img/upload-product-img.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { UsersInfoComponent } from './users-info/users-info.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
{path:"showSingle/:id",component:ShowSingleComponent},
{path:"editProduct/:id",component:EditproductComponent},
{path:"editPicProduct/:id",component:EditpicproductComponent},
{path:"addProduct",component:AddProductComponent},
{path:"Login",component:LoginComponent},
{path:"editPic/:id",component:EditPicComponent},
{path:"edit/:id",component:TestComponent},
{path:"profile",component:ProfileComponent},
{path:"editProduct/:id",component:EditproductComponent},
{path:"users",component:UsersInfoComponent},
{path:"editPicProduct/:id",component:UploadProductImgComponent},
{path:"singleProduct/:id",component:SingleproductComponent},
{path:"allProduct",component:AllproductsComponent},
{path:"home",component:HomeComponent},
{path:"side",component:SidebarComponent},
{path:"category",component:GetcategoriesComponent},
{path:"singleUserCate/:id",component:SingleUserCateComponent},
{path:"singleUserCate/:id",component:ShowSingleComponent},
{path:"editCustomerData/:id",component:EditCustomerDataComponent,canDeactivate:[CanDeactivateeeGuard]},
{path:"editCategory/:id",component:EditCategoryComponent},
{path:"addCategory",component:AddcategoryComponent},
{path:"userPage",component:UserPageComponent},
{path:"order/:id",component:AddCartComponent},
{path:"checkout",component:CheckoutComponent},
{path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
