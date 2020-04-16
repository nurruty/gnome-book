import moxios from 'moxios';
import { testStore } from '../../test/index';
import { fetchData } from '../actions/gnomes';
import { gnomes } from '../lib/mockProps';
import { expect } from 'chai';

describe('Feature Test :: Fetch gnomes', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('Should update store correctly', () => {

        const expectedState = {
            isFetching: false,
            gnomes: gnomes(),
        }
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { Brastlewark: gnomes(), }
            })
        });

      
        return store.dispatch(fetchData()).then(() => {
            const newState = store.getState();
            
            expect(newState.gnomes).to.have.length(expectedState.gnomes.length);
            expect(newState.gnomes[0].name).to.be.equal(expectedState.gnomes[0].name);
        })
        
    });

});