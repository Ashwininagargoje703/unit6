import React from  "react";


const initstate = {
    id : "",
    country : "",
    city : "",
    population: ""
};

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_ID":
            return{...state, id: action.payload };
            case "CHANGE_COUNTRY":
                return{...state, country: action.payload };
                case "CHANGE_CITY":
                    return{...state, city: action.payload };
                    case "CHANGE_POPULATION":
                        return{...state, population: action.payload };
                        default:
                            throw new Error();
    }
}