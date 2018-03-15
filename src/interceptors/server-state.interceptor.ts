import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {TransferState, makeStateKey} from '@angular/platform-browser';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {

  constructor(private _transferState: TransferState) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do(event => {
      if (event instanceof HttpResponse) {
        this._transferState.set(makeStateKey(req.urlWithParams), event.body);
      }
    });
  }
}
