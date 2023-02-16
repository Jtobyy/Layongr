# Layo's backend API Application with Django

## Business Requirements
At the very least, we want to keep record of our clients that visited our sites to purchase a particular product. In respect to this we want a table too that stores client login details, orders history and payment history.

## Objectives
- Create apis that enables the client to register.
- Apis that allows client to see their order history.
- Apis that allows user to edit their information.
- Write unit test for each of the apis.
- Create documentation your apis.

### To get started,
- `git clone the repo`
- `cd into it`
- Then create a virtual environment `python -m venv .env`
- Activate it. If on windows `.env\Scripts\activate` elif linux `.env/bin/activate`
- Install packages from the requirements file `pip install -r requirements.txt`
- 
- Then make migrations with `python manage.py makemigrations [--app] && python manage.py migrate [--app] ` 
    (Do this for each app: users, api, orders, products. 
    Ensure to makemigrations and migrate the users app before any other.
    Ensure to makemigrations and migrate the products app before orders.
    )
    Basically, do the following:
    - `python manage.py makemigrations users && python manage.py migrate users`
    - `python manage.py makemigrations api && python manage.py migrate api`
    - `python manage.py makemigrations products && python manage.py migrate products`
    - `python manage.py makemigrations orders && python manage.py migrate orders`
    - `python manage.py makemigrations && python manage.py migrate`

- Finally run the local server `python manage.py runserver :port`

- The root api will be at localhost:`port`/api/
- Products endpoint at /api/products/
- Orders at /api/orders/
- Users at /api/users/
- Partners at /api/users/partners/
- Summaries at /api/summary/

###
- To create a user, make a post request to the endpoint /api/users/
- To login, make a post request containing your username and password to the endpoint /api/auth/, This will return a `token` which you can then use to authenticate successive calls by adding an Authorization header to your request whose value is set to 'Bearer `token`'
- Visit each endpoint on your browser to find the list of parameters accepted by each API.


### To run tests,
- `python manage.py test`


### Tags
1 - fabric
2 - tailor_women
3 - tailor_men
4 - aso_oke
5 - velvet

## Contribution
### Joseph Olorunmeyan 
    github: Jtobyy
    email: olorunmeyanjoseph@gmail.com