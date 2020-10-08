# NorahTahiri

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploying
1. Go to digitalocean.com and log in with Norah's credentials.
2. Copy the cloud ip address from the dashboard.
3. Run `ssh root@<ip-address>` in the terminal.  The password is the same as the password to log on to digitalocean.
4. Once you have accessed the terminal, run `cd norah-tahiri`.
5. Pull your new changes down from github `git pull`.
6. View the existing process by enterring `pm2 list`.
7. Note the currently running process's ID (leftmost column).
8. Kill the process by enterring `pm2 stop <ID>`.
9. Restart the process by enterring `pm2 start npm -- run prod`.
10. Verify that the binary builds and serves by viewing the logs - `pm2 logs`.  You should see no errors.  Further verification can be done by checking norahtahiri.com.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
