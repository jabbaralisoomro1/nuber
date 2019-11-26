

2. Prepare your .env file there with database connection and other settings

3. Run "composer install" command

4. Run "php artisan migrate --seed" command. Notice: seed is important, because it will create the first admin user for you.

5. Run "php artisan key:generate" command.

6. Run "php artisan passport:install" command.
6. Run "php artisan serve ( if it is not working than " php -S localhost:8000 -t public/ " )  command.

7. Run "npm install" command.

8. Run "npm run dev" command.

And that's it, go to your domain and login:


Email: admin@admin.com

Password: password