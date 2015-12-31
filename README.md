NBN Year in Media 2015
====================
[NBN Year in Media 2015](http://apps.northbynorthwestern.com/year-in-media/2015/)

## Installation and Development

##### Install Middleman

`gem install middleman`

##### Install gems

`bundle install`

##### Run server

`bundle exec middleman server`

##### Generate static site

`bundle exec middleman build`

## Post-Build

If you're going to build the project, there are a few things you have to do manually afterwards in the /build folder:

Remove `<em>` from <title> of Hamilton, Parks and Rec, Mad Men, Grantland, Star Wars, Inside Out, The Daily Show

The following stories have images instead of Youtube videos: same-sex marriage, Grantland, and Keystone XL. In their index.html files, change the following to link the image source and caption (captions can be found in data/entry.json)

change

```
<div class="entry-image-wrapper">
    <div class="entry-image">
        https://upload.wikimedia.org/wikipedia/commons/7/75/Celebrating_a_new_America_-lovewins_58242_(18588276403).jpg
    </div>
</div>
```

to

```
<div class="entry-image-wrapper">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Celebrating_a_new_America_-lovewins_58242_(18588276403).jpg">
    <p class="credit">Photo by Ted Eytan on Flickr. Licensed under Creative Commons.</p>
</div>
```