# Credimage

> Add picture's author and license

Credimage lets you credit your pictures by pointing out the author, license and a link. 
It adds a copyrights zone on your pictures to warn users and visitors. This way, people will know what rights are associate with your pictures.

## Why ?

The main goal of Credimage is to inform and raise awareness of internet users on rights applied on numeric creations. Many licenses and rights may be applied on a picture. So, it's not so simple to understand how we can use and share it. In addition, there is no easy and efficient way to determine rights on a picture we just found on the internet.
That's why Credimage is born. It allows you to specify the author and the license of your pictures. Also, you can add a link : the URL where you found it.

Credimage is not a miracle solution, i think there is not, it's a new possibility.

## Download

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/bouchereaua/credimage/master/dist/jquery.credimage.min.js
[max]: https://raw.githubusercontent.com/bouchereaua/credimage/master/dist/jquery.credimage.js

## Installation

First you have to retrieve the following files from the dist folder: credimage.css and jquery.credimage.min.css.
Then, include this files in your HTML page.

```html
<script src="js/jquery.credimage.min.js"></script>
<link rel="stylesheet" href="css/credimage.css" type="text/css">
```

Add some data-attributes (data-ci-author, data-ci-license and data-ci-link) on pictures you want to use Credimage (it works both on IMG tag and DIV tag). Of course, you have to fill the attributes.

```html
<img src="img/Tsunami_by_hokusai_19th_century.jpg" alt="Une premiere image" data-ci-author="Katsushika Hokusai" data-ci-link="https://commons.wikimedia.org/wiki/File:Tsunami_by_hokusai_19th_century.jpg" data-ci-license="Domaine public"/>
<div id="div-5" class="ci-div" data-ci-author="Katsushika Hokusai"></div>
```

*_Remark:_ you do not have to add all the three attributes on a picture, it works as well with just one of them.*

Now, initialize the plugin and select on which elements you want to run it.

**Warning!** The initialization must be after the page has been loaded. Well, you can use onload event:

```html
$(window).load(function(){
  $(".container img").credimage();
});
```
### Example

[Few tests](http://bouchereaua.net/credimage/credimage.html)

## Bugs

- With Chrome : if the plugin is launched before the page has been loaded, texts are misplacing. That's why you have to use an onload event.

- Sudden closure of tooltips (not frequent).

## Contact

[Website: bouchereaua.net](http://bouchereaua.net)
[Twitter: @BouchereauA](https://twitter.com/BouchereauA)

## License

© Aymeric Bouchereau - Licence Creative Commons Attribution - Partage dans les Mêmes Conditions 4.0 International.
