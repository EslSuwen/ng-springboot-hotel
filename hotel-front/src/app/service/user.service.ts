import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {Observable, of} from 'rxjs';
import {User} from '../dto/user';
import {catchError, tap} from 'rxjs/operators';
import {MESSAGETEXTS} from '../const/MessageConsts';
import {Result} from '../dto/Result';
import {SearchCondition} from '../dto/SearchCondition';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private customersUrl = `${environment.apiUrl}/api/customers`;
  private USER_URL = `${environment.apiUrl}/user`;


  constructor(
    private http: HttpClient,
    private message: NzMessageService) {
  }

  /**
   * 获得所有用户信息
   *
   * @return 用户信息数组
   * @author suwen
   * @date 2020/6/5 下午3:27
   */
  getUser(): Observable<User[]> {
    const url = `${this.USER_URL}/getAllInfo`;

    return this.http.get<User[]>(url).pipe(
      tap(_ => this.success(MESSAGETEXTS.FETCH_SUCCESS)),
      catchError(this.handleError<User[]>('查询所有用户信息', []))
    );
  }

  /**
   * 更新客户信息
   * @param user 用户信息
   */
  updateUser(user: User): Observable<any> {
    const url = `${this.USER_URL}/update`;
    return this.http.put(url, user, httpOptions).pipe(
      tap(() => this.success(MESSAGETEXTS.UPDATE_SUCCESS)),
      catchError(this.handleError<any>('更新用户信息'))
    );
  }

  /**
   * 更新客户信息
   * @param id 编号
   * @param oldPw 当前密码
   * @param newPw 新密码
   */
  updatePassword(id: string, oldPw: string, newPw: string): Observable<any> {
    const url = `${this.USER_URL}/updatePassword`;
    return this.http.put(url, null, {
      params: {id, oldPw, newPw}
    }).pipe(
      tap(() => this.success(MESSAGETEXTS.UPDATE_SUCCESS)),
      catchError(this.handleError<any>('更新用户密码'))
    );
  }

  /**
   * 删除客户
   * @param user 用户
   */
  deleteUser(user: User | number): Observable<Result> {
    let id;
    if (user instanceof User) {
      id = user.id;
    } else if (typeof user === 'number') {
      id = user;
    }

    const url = `${this.USER_URL}/delete`;

    return this.http.delete<Result>(url, {
      params: {
        id,
      }
    }).pipe(
      tap((result) => {
        if (result.success) {
          this.success(result.message);
        } else {
          this.error(result.message);
        }
      }),
      catchError(this.handleError<Result>('删除客人信息'))
    );
  }

  /**
   * @description 搜索用户
   * @param searchConditions 搜索条件
   */
  searchUser(searchConditions: SearchCondition[]): Observable<Result> {
    if (searchConditions === null
      || (searchConditions.length === 1 && searchConditions[0].key === undefined)
      || (searchConditions.length === 1 && searchConditions[0].key === null)
      || (searchConditions.length === 1 && searchConditions[0].value === undefined)
      || (searchConditions.length === 1 && searchConditions[0].value === null)
      || (searchConditions.length === 1 && !searchConditions[0].value.trim())) {
      return of(null);
    }

    let httpParams = new HttpParams();
    searchConditions.forEach(condition => {
      httpParams = httpParams.append(condition.key, condition.value);
    });

    return this.http.get<Result>(`${this.customersUrl}`, {params: httpParams}).pipe(
      tap((result) => {
        if (result.success) {
          this.success(result.message);
        } else {
          this.error(result.message);
        }
      }),
      catchError(this.handleError<Result>('搜索客人信息'))
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
