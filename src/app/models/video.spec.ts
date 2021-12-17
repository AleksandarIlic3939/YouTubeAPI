import { noUndefined } from '@angular/compiler/src/util';
import { Video } from './video';

describe('Video', () => {
  it('should create an instance', () => {
    expect(new Video('','','',0)).toBeTruthy();
  });
});
