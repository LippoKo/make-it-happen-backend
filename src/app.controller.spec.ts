import { AppService } from './app.service';

describe('AppController (e2e)', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  it('Should return hello object', () => {
    expect(service.getHello()).toEqual('M-iT-H!');
  });
});
