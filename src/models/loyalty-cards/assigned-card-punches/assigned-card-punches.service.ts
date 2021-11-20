import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable()
export class AssignedCardPunchesService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  private LOYALTY_CARDS_HOST = this.configService.get<string>(
    'loyaltyCardsApi.host',
  );

  private getSlug = (assignedCardId: number) =>
    `/assigned-cards/${assignedCardId}/punches`;

  create(assignedCardId: number): Observable<AxiosResponse<unknown>> {
    const URL = `${this.LOYALTY_CARDS_HOST}${this.getSlug(assignedCardId)}`;
    const httpRequest = this.httpService.post<unknown>(URL).pipe(
      tap({
        next(axiosResponse) {
          console.log(` --- Log
          statuscode: ${axiosResponse.status}
          responseBody: ${JSON.stringify(axiosResponse.data)}
          requestBody: null
          url: ${URL}
          `);
        },
      }),
      catchError((error) => {
        console.error('======---!!!!=== ERROR', error);
        throw new Error('---Error when puncing cards');
      }),
    );

    return httpRequest;
  }
}
