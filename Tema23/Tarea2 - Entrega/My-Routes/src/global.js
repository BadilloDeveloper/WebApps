


    var routes = [
        {
            id: 1, title: 'Mi ruta',date: new Date(),ts: 12345677,color: 'blue', pending: false, ver:false,
            positions: [  {lat: 38.70545, long: -1.47432 },{lat: 38.70545, long: -1.47532 },{lat: 38.71545, long: -1.47463 },{lat: 38.71545, long: -1.49 }],
            objects: [ { type: 'image', lat: 38.70454, lon: -1.47432, content: '...' },
            { type: 'text', lat: 38.70454, lon: -1.47432, content: '...' }]
            },
            {id: 2, title: 'Mi ruta 2',date: new Date(),ts: 12345677,color: 'red', pending: false,ver:false,
             positions: [ {lat: 39.70545, long: -1.47413 },{lat: 39.71545, long: -1.47463 }],
            objects: [ { type: 'image', lat: 38.70454, lon: -1.47432, content: '...' },
            { type: 'text', lat: 38.70454, lon: -1.47432, content: '...' }]
            }



    ];
    routes.nextRouteId = 3;
export { routes }