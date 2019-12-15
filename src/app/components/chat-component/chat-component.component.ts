import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import * as $ from 'jquery';
import {GlobalRootURL} from "../../GlobalRootURL";

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {

  private serverUrl = GlobalRootURL.BASE_API_URL + 'socket'
  private stompClient : any;

  constructor(){
    this.initializeWebSocketConnection();
  }

  ngOnInit(){}

  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
          $(".chat").append("<div class='message'>"+message.body+"</div>")
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message : any){
    this.stompClient.send("/app/send/message" , {}, message);
    $('#input').val('');
  }
}
