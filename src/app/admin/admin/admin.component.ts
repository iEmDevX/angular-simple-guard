import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private authenService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authenService.logout();
  }
}
