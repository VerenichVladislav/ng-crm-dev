import { Injectable, EventEmitter } from "@angular/core";

const CLIENT_ID = "374722391205-6c9f5jvhdi2pfhqh1pogabu97qoholm7.apps.googleusercontent.com";
const API_KEY = "AIzaSyDQXCzw7pxfai5B_l6mn5Ne8Uh_gbSrjxg";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/drive';
@Injectable()
export class GapiSession {
    googleAuth: gapi.auth2.GoogleAuth;

    constructor(
    ) {
    }
    
    initClient() {
        return new Promise((resolve,reject)=>{
            gapi.load('client:auth2', () => {
                return gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                }).then(() => {                   
                    this.googleAuth = gapi.auth2.getAuthInstance();
                    resolve();
                });
            });
            
        });
        
    }
    get isSignedIn(): boolean {
        return this.googleAuth.isSignedIn.get();
    }

    signIn() {
        return this.googleAuth.signIn({
            prompt: 'consent'
        }).then((googleUser: gapi.auth2.GoogleUser) => {
            
        });
    }

    signOut(): void {
        this.googleAuth.signOut();
    }
}