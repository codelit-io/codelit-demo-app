/* Usage Example */
/* import FirestoreMock from '../test_helpers/firestore.mock'
import firebase from 'firebase/app'
import 'firebase/firestore'

describe('The Agreement model', () => {
    const firestoreMock = new FirestoreMock()
    beforeEach(() => {
        firebase.firestore = firestoreMock
        firestoreMock.reset()
    })

    it('does something', (done) => {
        firestoreMock.mockAddReturn = { id: 'test-id' }
        firebase.firestore.collection('foobar')
          .add({foo: 'bar'})
          .then(res => {
            expect(firestoreMock.mockCollection).toBeCalledWith('foobar')
            expect(firestoreMock.mockAdd).toBeCalledWith({foo: 'bar'})
            expect(res.id).toEqual('test-id')
            done()
          })
          .catch(done)
    })
}) */

export default class FirestoreMock {
  constructor() {
    // mocked methods that return the class
    this.mockCollection = jest.fn(() => this);
    this.mockWhere = jest.fn(() => this);
    this.mockOrderBy = jest.fn(() => this);

    // methods that return promises
    this.mockAdd = jest.fn(() => Promise.resolve(this._mockAddReturn));
    this.mockGet = jest.fn(() => Promise.resolve(this._mockGetReturn));

    // methods that accepts callbacks
    this.mockOnSnaptshot = jest.fn((success, error) =>
      success(this._mockOnSnaptshotSuccess)
    );

    // return values
    this._mockAddReturn = null;
    this._mockGetReturn = null;
    this._mockOnSnaptshotSuccess = null;
  }

  collection(c) {
    return this.mockCollection(c);
  }
  getCollectionById(c) {
    return this.mockCollection(c);
  }

  where(...args) {
    return this.mockWhere(...args);
  }

  orderBy(...args) {
    return this.mockOrderBy(...args);
  }

  add(a) {
    return this.mockAdd(a);
  }

  get() {
    return this.mockGet();
  }

  onSnapshot(success, error) {
    return this.mockOnSnaptshot(success, error);
  }

  set mockAddReturn(val) {
    this._mockAddReturn = val;
  }

  set mockGetReturn(val) {
    this._mockGetReturn = val;
  }

  set mockOnSnaptshotSuccess(val) {
    this._mockOnSnaptshotSuccess = val;
  }

  reset() {
    // reset all the mocked returns
    this._mockAddReturn = null;
    this._mockGetReturn = null;
    this._mockOnSnaptshotSuccess = null;

    // reset all the mocked functions
    this.mockCollection.mockClear();
    this.mockWhere.mockClear();
    this.mockOrderBy.mockClear();
    this.mockAdd.mockClear();
    this.mockGet.mockClear();
  }
}
