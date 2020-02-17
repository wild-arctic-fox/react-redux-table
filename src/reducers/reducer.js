import onSort from '../actions/sort';

const createElement = (val) => {
    return {
        0: new Date(val).getFullYear(),
        1: (Math.random() * 100).toFixed(1),
        2: (Math.random() * 100).toFixed(1),
        3: (Math.random() * 100).toFixed(1),
        4: (Math.random() * 100).toFixed(1),
        5: (Math.random() * 100).toFixed(1),
        6: (Math.random() * 100).toFixed(1),
        7: (Math.random() * 100).toFixed(1),
        8: (Math.random() * 100).toFixed(1),
        9: (Math.random() * 100).toFixed(1),
    }
};
const state0 = {
    headerItems: ['Date', 'ZFT', 'Unique', 'Registrations', 'Demo registrations', 'Conversion', 'Deposit', 'Ftd', 'Deals', 'Profit'],
    items: [createElement('2009/12/12'), createElement('2010/12/12'), createElement('2011/10/01'), createElement('1999/06/08')],
    sort: true
};
export const reducer = (state = state0, action) => {
    switch (action.type) {
        case 'SORT':
            return {
                ...onSort(action.value, state)
            };
            break;
        default:
            return state;

    }
};
