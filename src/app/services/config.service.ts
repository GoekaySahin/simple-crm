import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class ConfigService {
  [x: string]: any;
  constructor(private http: HttpClient) {}
  options: {
    headers?: HttpHeaders | { [header: string]: string | string[] };
    observe?: "body" | "events" | "response";
    params?:
      | HttpParams
      | {
          [param: string]:
            | string
            | number
            | boolean
            | ReadonlyArray<string | number | boolean>;
        };
    reportProgress?: boolean;
    responseType?: "arraybuffer" | "blob" | "json" | "text";
    withCredentials?: boolean;
  };
}
