'use strict'

const apiKey = 'nplT9QdvpFqvlE1XRa6jLEKsdQIsTqMNPFvwIMqo';
const searchUrl = "https://api.nps.gov/api/v1/parks";

function formatStates(query) {
    let states = [];
    query = query.split(", ");
    query.forEach(state => {
        states.push(`stateCode=${state}`);
    });
    return states;
}

function getNationalParks(query, limit) {
    let stateCode = formatStates(query);
    console.log(limit);
    //format query
}

function watchForm() {
    $('#js-form').submit(event => {
        event.preventDefault();
        const searchTerms = $('#js-state-code').val();
        const maxResults = $('#js-max-results').val();
        getNationalParks(searchTerms, maxResults);
    })
}

$(watchForm);