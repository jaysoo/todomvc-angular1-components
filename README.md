This is an example of TodoMVC implemented using Angular 1 containers and components.

Here are the main ideas:

- We can group directives into two types: container and UI components.
- Containers are the data layers. They handle interactions with data services and pass data to components.
- Components render data, and they do not mutate this data.
- Containers can pass handlers, that interact with data services, as callbacks to components.

See my blog post for more details:
[Containers and Components in Angular 1](http://jaysoo.ca/2015/03/30/container-component-pattern-in-angular-1/).

I also recommend this post by Dan Abramov if you use ReactJS with Flux/Redux:
[Smart and Dumb Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).


# Running application

Install dependencies:

```
npm install
```

Run server:

```
npm start
```

Now browser to http://localhost:8081/

