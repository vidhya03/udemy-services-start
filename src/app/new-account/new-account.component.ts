import { Component, EventEmitter, Output } from '@angular/core';
import { LogggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogggingService, AccountsService]
})
export class NewAccountComponent {


  constructor(
    private loggingService: LogggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
