import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { LogggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LogggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;



  constructor(private accountsService: AccountsService) {}
  onSetTo(status: string) {
    this.accountsService.updateStatus( this.id, status );
    this.accountsService.statusUpdated.emit(status);
  }

  ngOnInit() {}
}
