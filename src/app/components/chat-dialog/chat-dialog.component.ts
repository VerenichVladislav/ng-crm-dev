// import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
// import {GlobalRootURL} from '../../GlobalRootURL';
// import {SockJS} from 'node_modules/sockjs';
// import * as Stomp from 'stompjs';
// import { angularMath } from 'angular-ts-math';
// //
// //
// @Component({
//   selector: 'app-chat-dialog',
//   templateUrl: './chat-dialog.component.html',
//   styleUrls: ['./chat-dialog.component.css']
// })
// export class ChatDialogComponent implements OnInit {
//   usernamePage = $('#username-page');
//   chatPage = $('#chat-page');
//   usernameForm = $('#this.usernameForm');
//   messageForm = $('#this.messageForm');
//   messageInput = $('#message');
//   messageArea = $('#this.messageArea');
//   connectingElement = $('.connecting');
//
//   stompClient = null;
//   username = null;
//
//   private colors = [
//     '#2196F3', '#32c787', '#00BCD4', '#ff5652',
//     '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
//   ];
//   constructor() { }
//
//   ngOnInit() {
//   }
//
//   connect() {
//     let username = $('#name').val();   // trim
//
//     if (username !== '') {
//       $(this.usernamePage).addClass('hidden');
//       $(this.chatPage).removeClass('hidden');
//
//       let socket = new SockJS(GlobalRootURL.BASE_API_URL + '/ws');
//       this.stompClient = Stomp.over(socket);
//
//       this.stompClient.connect({}, this.onConnected, this.onError);
//     }
//   }
//
//   onConnected() {
//     this.stompClient.subscribe(GlobalRootURL.BASE_API_URL + '/topic/public', this.onMessageReceived);
//     this.stompClient.send(GlobalRootURL.BASE_API_URL + '/app/chat.addUser',
//       {},
//       JSON.stringify({sender: this.username, type: 'JOIN'})
//     );
//
//     this.connectingElement.addClass('hidden');
//   }
//
//   onError() {
//     $(this.connectingElement).text('Could not connect to WebSocket server. Please refresh this page to try again!');
//     $(this.connectingElement).css('color', 'red');
//   }
//
//   sendMessage() {
//     let messageContent = $(this.messageInput).val(); // trim
//
//     if (messageContent && this.stompClient) {
//       let chatMessage = {
//         sender: this.username,
//         content: $(this.messageInput).val(),
//         type: 'CHAT'
//       };
//
//       this.stompClient.send(GlobalRootURL.BASE_API_URL + '/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
//       $(this.messageInput).val('');
//     }
//   }
//
//   onMessageReceived(payload) {
//     let message = JSON.parse(payload.body);
//
//     let messageElement = document.createElement('li');
//
//     if (message.type === 'JOIN') {
//       messageElement.classList.add('event-message');
//       message.content = message.sender + ' joined!';
//     } else if (message.type === 'LEAVE') {
//       messageElement.classList.add('event-message');
//       message.content = message.sender + ' left!';
//     } else {
//       messageElement.classList.add('chat-message');
//
//       var avatarElement = document.createElement('i');
//       var avatarText = document.createTextNode(message.sender[0]);
//       avatarElement.appendChild(avatarText);
//       avatarElement.style['background-color'] = this.getAvatarColor(message.sender);
//
//       messageElement.appendChild(avatarElement);
//
//       let usernameElement = document.createElement('span');
//       let usernameText = document.createTextNode(message.sender);
//       usernameElement.appendChild(usernameText);
//       messageElement.appendChild(usernameElement);
//     }
//
//     var textElement = document.createElement('p');
//     var messageText = document.createTextNode(message.content);
//     textElement.appendChild(messageText);
//
//     messageElement.appendChild(textElement);
//
//     $(this.messageArea).append($(messageElement));
//     // this.messageArea.scrollTop = this.messageArea.scrollHeight;
//   }
//
//
//   getAvatarColor(messageSender): string {
//     var hash = 0;
//     for (var i = 0; i < messageSender.length; i++) {
//       hash = 31 * hash + messageSender.charCodeAt(i);
//     }
//
//     var index = angularMath.absoluteOfNumber(hash % this.colors.length);
//     return this.colors[index];
//   }
// }
