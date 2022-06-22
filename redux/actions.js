var actions = {

    modifyNavigation: {
        type: 'modifyNavigation',
        payload:{
            "top": false,
            "bottom": false,
            "stack": false,
            "drawer": false,
        }      
    },

    modifyTopNavigation : {
        type: 'modifyTopNavigation',
        payload:{
            "first": false,
            "second": false,
            "third": false,
            "fourth": false
        }   
    },

    modifyBottomNavigation : {
        type: 'modifyBottomNavigation',
        payload:{
            "first": false,
            "second": false,
            "third": false,
            "fourth": false
        }   
    },

    modifyStackNavigation : {
        type: ' modifyStackNavigation',
        payload:{
            "first": false,
            "second": false,
            "third": false,
            "fourth": false
        }   
    },

    modifyDrawerNavigation : {
        type: ' modifyDrawerNavigation',
        payload:{
            "first": false,
            "second": false,
            "third": false,
            "fourth": false
        }   
    },

}

export default actions;