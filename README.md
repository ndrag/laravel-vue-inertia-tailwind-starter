A simple base template with Laravel, Inertia.JS, Vue, and Tailwind CSS. 

- PHP 8
- npm 8
- NodeJS 16
- MySQL 8


## Initial Setup

- Run the following command to install PHP dependencies, including Sail itself.

```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php80-composer:latest \
    composer install --ignore-platform-reqs
```
- Set the following bash alias to enable the `sail $COMMAND` shortcut: `alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'`
- Copy `.env.example` to a new `.env` file and personalise it as required.
- Run `sail artisan key:generate` to generate an encryption key.
- Run `sail artisan migrate --seed` to build (and seed) the database - although no tables beyond the default will yet be configured.
- Run `sail npm install` to install client-side dependencies. 
## Running locally
- Run `sail up` to launch Docker.
- Run `sail npm run dev` to build the site.
- Run `sail npm run hot` to build the site with live reloading.
- View the site at `localhost`.
- Run `sail down` to kill the local Docker service. 