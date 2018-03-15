import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {TransferState, makeStateKey} from '@angular/platform-browser';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class BrowserStateInterceptor implements HttpInterceptor {

  constructor(private _transferState: TransferState) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const storedResponse: string = this._transferState.get(makeStateKey(req.urlWithParams), null);

    if (storedResponse) {
      const response = new HttpResponse({body: storedResponse, status: 200});
      return of(response);
    }

    return next.handle(req);
  }
}
