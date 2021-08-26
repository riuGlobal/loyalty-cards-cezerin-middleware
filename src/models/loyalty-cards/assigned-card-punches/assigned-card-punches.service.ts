import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
      catchError(() => {
        console.error('======---!!!!=== ERROR');
        throw 'Error getting cards';
      }),
    );

    httpRequest.subscribe({
      next(axiosResponse) {
        console.log(` --- Log
        statuscode: ${axiosResponse.status}
        resposeBody: ${JSON.stringify(axiosResponse.data)}
        requestBody: null
        url: ${URL}
        `);
      },
    });
    return httpRequest;
  }
}
