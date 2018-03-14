import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  add(message: string){
    this.messages.push(message);
  }
  //adds a message to the cache

  clear(){
    this.messages = [];
  }
  //clears the cache

}
