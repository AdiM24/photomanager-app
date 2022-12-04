import { TestBed } from '@angular/core/testing';

import { PhotoListService } from './photo-list.service';

describe('PhotoListService', () => {
  let service: PhotoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
