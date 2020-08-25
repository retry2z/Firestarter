import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile-page/profile.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileCardComponent,
        ImageUploadComponent,
        PasswordResetComponent
    ],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class CustomersModule { }
