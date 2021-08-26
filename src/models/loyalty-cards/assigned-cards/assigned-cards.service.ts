import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AssignedCard } from '../interfaces/assigned-cards.interface';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AssignedCardsService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  private LOYALTY_CARDS_HOST = this.configService.get<string>(
    'loyaltyCardsApi.host',
  );

  private ASSIGNED_CARDS_SLUG = '/assigned-cards';

  findAll(
    userId: string,
    onlyNotFullyPunched: boolean,
  ): Observable<AxiosResponse<AssignedCard[]>> {
    const URL = `${this.LOYALTY_CARDS_HOST}${this.ASSIGNED_CARDS_SLUG}`;
    const params = {
      userId,
      onlyNotFullyPunched,
    };

    const httpRequest = this.httpService
      .get<AssignedCard[]>(URL, { params })
      .pipe(
        tap({
          next(axiosResponse) {
            console.log(` --- Log
            statuscode: ${axiosResponse.status}
            resposeBody: ${JSON.stringify(axiosResponse.data)}
            requestBody: null
            url: ${URL}
            `);
          },
        }),
        catchError((error) => {
          console.error('======---!!!!=== ERROR', error);
          throw new Error('====Error wehn GET cards=');
        }),
      );

    return httpRequest;
  }
}
