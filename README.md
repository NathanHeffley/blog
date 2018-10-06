# Nathan Heffley's Gatsby Blog

You'll need to create the `.env.development` and `.env.production` files by copying `.env.example` and providing the ID and access code to your Contentful space which has a `BlogPost` content type.

Gatsby will try loading `title`, `slug`, `description`, `githubUrl`, and `content` fields from your blog posts, so you should define those fields on your content type.

Then navigate into the blog's directory and start it up in development mode to test it out.

```bash
gatsby develop
```

To build the site, simply run the build command.

```bash
gatsby build
```

Then you can put the files generated in the public directory onto a static site host, or serve them locally with Gatsby.

```bash
gatsby serve
```
