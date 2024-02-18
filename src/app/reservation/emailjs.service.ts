// emailjs.service.ts

import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailjsService {
  constructor() {}

  sendEmail(templateId: string, data: any): Promise<any> {
    return emailjs.send('default_service', templateId, data);
  }
}
