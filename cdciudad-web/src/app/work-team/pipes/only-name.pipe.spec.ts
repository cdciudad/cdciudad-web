import { OnlyNamePipe } from './only-name.pipe';

describe('OnlyNamePipe', () => {
  it('create an instance', () => {
    const pipe = new OnlyNamePipe();
    expect(pipe).toBeTruthy();
  });
});
