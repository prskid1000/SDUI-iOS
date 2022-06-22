var navigation = (state = [], action) => {
    switch (action.type) {
        case 'modifyNavigation':
            state = action.payload;
            return state;
        default:
            return state
    }
}

var topNavigation = (state = [], action) => {
    switch (action.type) {
        case 'modifyTopNavigation':
            state = action.payload;
            return state;
        default:
            return state
    }
}

var bottomNavigation = (state = [], action) => {
    switch (action.type) {
        case 'modifyBottomNavigation':
            state = action.payload;
            return state;
        default:
            return state
    }
}

var stackNavigation = (state = [], action) => {
    switch (action.type) {
        case 'modifyStackNavigation':
            state = action.payload;
            return state;
        default:
            return state
    }
}

var drawerNavigation = (state = [], action) => {
    switch (action.type) {
        case 'modifyDrawerNavigation':
            state = action.payload;
            return state;
        default:
            return state
    }
}

var reducers = {
  navigation,
  topNavigation,
  bottomNavigation,
  stackNavigation,
  drawerNavigation
}

export default reducers;