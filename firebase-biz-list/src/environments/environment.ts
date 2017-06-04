// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
	firebase: {
    apiKey: "AIzaSyDysYtw2L62kZ8Z3Bfo0kdSxoSpVyiP6l0",
    authDomain: "fir-biz-list.firebaseapp.com",
    databaseURL: "https://fir-biz-list.firebaseio.com",
    projectId: "fir-biz-list",
    storageBucket: "fir-biz-list.appspot.com",
    messagingSenderId: "173660768735"
  }
	
	
};
