// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  data_types: ['integer', 'string', 'datetime'],
  'url': {
    // 'data_tables': 'http://localhost:8000/api/table_field'
    'data_tables': 'http://qsystem-ws.graficaideamia.com/api/table_field',
    'requests': 'http://qsystem-ws.graficaideamia.com/api/request'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
