import {GET_BUSES, SET_CURRENT_STOP, SET_STATE_PROPERTY} from "./action-types";

const initialState = {
    buses: [

    ],
    user: {
        "_id": "60c993f0c2bc354cf14264ae",
        "username": "driverone",
        "password": "password",
        "busNumber": "1"
    },
    bus: {
        "_id": "60c99315aff6664cb7bfe2f8",
        "number": 1,
        "readableName": "First Bus",
    },
    route: {
        "_id": "60c8ee13e2f1371aafef8af6",
        "name": "Girne Lemar",
        "routeNumber": 1,
        "busStops": "60b238b4426d46ab109e9b91, 60b348f50fe0910d14b14f88",
        "stops": [
            {
                "_id": "60b238b4426d46ab109e9b91",
                "number": 1,
                "readableName": "Hamitkoy",
            },
            {
                "_id": "60b348f50fe0910d14b14f88",
                "number": 2,
                "readableName": "Lemar",
            }
        ]
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE_PROPERTY:{
            const controlObject = action.payload;
            const key = controlObject.key;
            const value = controlObject.value;

            return {
                ...state,
                [key] : value
            };
        }

        case GET_BUSES:{
            let buses = action.payload
            return {
                ...state,
                buses : buses
            };
        }

        case SET_CURRENT_STOP:{
            const busStop = action.payload;
            const stopsClone = JSON.parse(JSON.stringify(state.route.stops));

            const updated = stopsClone.map(stop => {
                if (stop._id === busStop._id){
                    stop = {
                        ...stop,
                        isArrived: true
                    }
                }
                return stop;
            });

            updated.push(updated.shift());

            return {
                ...state,
                route: {
                    ...state.route,
                    stops: updated
                }
            };
        }

        default:
            return state;
    }
};

export {initialState, reducer};
