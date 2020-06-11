import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {MESSAGETEXTS} from '../const/MessageConsts';
import {Result} from '../dto/Result';
import {BookRoom} from '../dto/BookRoom';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookRoomService {

  private BOOK_ROOM_URL = `${environment.apiUrl}/bookRoom`;

  constructor(
    private http: HttpClient,
    private message: NzMessageService) {
  }

  /**
   * 获得所有用户订房信息
   *
   * @return 用户订房数据
   * @author suwen
   * @date 2020/6/5 下午3:27
   */
  getBookRoomByIdCard(idCard: string): Observable<Result> {
    const url = `${this.BOOK_ROOM_URL}/getBookRoomByIdCard`;

    return this.http.get<Result>(url, {params: {idCard}}).pipe(
      tap(_ => this.success(MESSAGETEXTS.FETCH_SUCCESS)),
      catchError(this.handleError<Result>('查询所有用户订房信息', null))
    );
  }

  /**
   * 获取待审核所有订房信息
   *
   * @return 订房信息列表
   * @author suwen
   * @date 2020/6/11 上午9:29
   */
  getAuditBookRoom(): Observable<Result> {
    const url = `${this.BOOK_ROOM_URL}/getAuditBookRoom`;

    return this.http.get<Result>(url).pipe(
      tap(_ => this.success(MESSAGETEXTS.FETCH_SUCCESS)),
      catchError(this.handleError<Result>('查询待审核所有订房信息', null))
    );
  }

  /**
   * 增加订房信息
   *
   * @param bookRoom 订房信息
   * @author suwen
   * @date 2020/6/11 上午9:31
   */
  addBookRoom(bookRoom: BookRoom): Observable<Result> {
    const url = `${this.BOOK_ROOM_URL}/addBookRoom`;

    return this.http.post<Result>(url, bookRoom).pipe(
      tap(_ => this.success(MESSAGETEXTS.FETCH_SUCCESS)),
      catchError(this.handleError<Result>('增加订房信息', null))
    );
  }


  /**
   * 根据id审核订房
   *
   * @return 订房信息列表
   * @author suwen
   * @date 2020/6/11 上午9:29
   */
  auditBookRoom(id: number, status: string): Observable<Result> {
    const url = `${this.BOOK_ROOM_URL}/auditBookRoom`;

    // @ts-ignore
    return this.http.put<Result>(url, null, {params: {id, status}}).pipe(
      tap(_ => this.success(MESSAGETEXTS.FETCH_SUCCESS)),
      catchError(this.handleError<Result>('审核订房信息', null))
    );
  }


  private success(message: string) {
    this.message.create('success', message);
  }

  private error(message: string) {
    this.message.create('error', message);
  }

  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      let msg = error.message;
      if (error.error.code !== 'undefined' && (typeof error.error.message === 'string' && error.error.message.constructor === String)) {
        msg = error.error.message;
      }

      // TODO: send the error to remote logging infrastructure
      // console.error(error);

      // TODO: better job of transforming error for user consumption
      this.error(`${operation} 失败: ${msg}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
