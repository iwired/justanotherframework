import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
     { id: 11, name: 'track pad' },
  { id: 12, name: 'mcbook pro' },
  { id: 13, name: 'mcbook' },
  { id: 14, name: 'iMac' },
  { id: 15, name: 'Apple pencil' },
  { id: 16, name: 'leather case for ipad 10.5"' },
  { id: 17, name: 'Apple ipad pro 12.5"' },
  { id: 18, name: 'Apple ipad pro 10.5"' },
  { id: 19, name: 'rechargeable mouse' },
  { id: 20, name: 'iphone 6 plus' },
  { id: 21, name: 'iphone 7 plus' },
  { id: 22, name: 'iphone 8 plus' },
  { id: 23, name: 'iphone X' }
    ];
    return {items};
  }
}


