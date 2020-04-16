import moxios from 'moxios';
import { testStore } from '../../test/index';
import { fetchData } from '../actions/professions';
import { gnomes } from '../lib/mockProps';
import { expect } from 'chai';

describe('Integration Test :: Fetch professions', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('Should update store correctly', () => {

        const testGnomes = gnomes();

        const expectedState = {
            professions: {
                'Medic': [ testGnomes[0] ],
                'Baker': [ testGnomes[1], testGnomes[2] ]
            }
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
            expect(newState.professions['Medic']).to.have.length(1)
            expect(newState.professions['Baker']).to.have.length(2)
        })
        
    });

});