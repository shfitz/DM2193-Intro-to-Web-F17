##<b>Sept 5<br/> Setup & Intros</b> 
#### In Class:
<ul>
    <li>Introductions</li>
    <li>Goals of the course</li>
    <li>Your Learning Goals</li>
    <li>Syllabus Overview</li>
    <li>How the Web Works</li>
    <li>Web Dev Process</li>
    <li>Overview of Tools</li>
</ul> 

#### <b>[Slides](https://docs.google.com/a/nyu.edu/presentation/d/1nlC73TSVtKVrorM0PIXpM2LAISi-pP2gBa9dYsQQ_Sg/edit?usp=sharing)</b> 

####<b>HW</b> 
<ul>
<li>Join our <a href="https://introtowebfall2017.slack.com" target="external">Slack channel</a></li>
<li>Sign up for <a href="https://github.com">GitHub and send me the link for the repo for this class</a> on Slack</li>
<li>Read this <a href="http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners">beginners intro to git</a>. Feel free to use a GUI.</li>
<li>Download a text editor of your choice. <a href="http://www.sublimetext.com/">Sublime Text</a> and <a href="http://brackets.io/">Brackets</a> are two great choices. Atom is cool too.</li>
<li>Bring in a recipe to class (post it to your github acccount!), it doesn't need to be overly complicated, but it should have a couple of ingredients, and a list of instructions on what to do.</li>

<li>Get some webspace!</li>
<ul><li>You can get your own web server space for more control of your domain. I can recommend <a href="http://www.siteground.com">siteground.com</a> or <a href="https://www.dreamhost.com/promo/edunyu/">dreamhost.com</a>.</li><li>Alternatively, you can receive web server space from IDM's Technology Manager, Elton Kwok, MAGNET 883. Email eltonkwok@nyu.edu to set up your web server space</li><li>IDM's FTP server info: http://sites.bxmc.poly.edu (Use active mode to connect)
</ul>
</ul>


###Sept 7 : HTML, FTP

####In Class:
#####Intro to HTML
HTML, Hypertext Markup language. It's a written language that contains links to other text elements. HTML also provides the structure of a webpage. It's the skeleton.

HTML is a <i>markup</i> language. It's a way of annotating documents that seperates the content from the structure.</li>

HTML structure is defined by <i>tags</i>, keywords that are surrounded by angled brackets like these : <code>< ></code>. These tags lay out the page.

Tags are also called _elements_, and generally come in pairs; and opening tag, and a closing tag that indicates when a particular kind of formatting has ended. Your content will go between the tags:

```
<tagname>content</tagname>
```

**Attributes** - Some elements can contain attributes. They go inside the tag like this: 
```
attribute="value"
```

All HTML pages have the following structural elements:  html, head, and body tags
The 
```
<head>
```
tag contains information about your page like the title. There's other stuff to do in there that we'll touch on soon enough.

The body is where you'll put the content that you see on a webpage. After closing the 
```
</head>
```
  tag, you'll place the 
  ```
<body>
```
 tag.

Tags can go inside each other, it's called nesting, and you'll be doing a lot of it

You can think of tags as being like parentheses: whenever you open one, you should close it. Tags also nest, so you should close them in the right order.

```
<p>This is a paragraph<a href=“https://www.google.com/”>With a link to google</a></p>
```

```
<!DOCTYPE HTML>
<html>
<head>
<title>My Webpage</title>
</head>
<body>
<h1>This is an H1 Heading</h1>
<h3>This is an H3 Heading</h3>
<p>This is my first paragraph tag!</p>
</body>
</html>
```

Let’s take a look at the code above. There are a few tags (elements) to review.

####The title tag:
```
<title>My Webpage</title>
```
The title tag is always nested inside the <head></head> of our document. The title tag does a few things. Whatever text you put between the title tags, will show up at the top of your browser. The title tag (along with a few others we will discuss later) also tell search engines about the content of your webpage. The title text is what shows up as the link in search results.

#### The paragraph tag:

The majority of the content on webpages are probably paragraphs. In fact this paragraph on this blog post is wrapped in a paragraph tag!

<p> The majority of the content on webpages are probably paragraphs. In fact this paragraph on this blog post is wrapped in a paragraph tag!</p>

##### Bold and Italic text within a paragraph:

Sometimes we need to emphasize or strengthen some of the words in a paragraph.

For italic text, we wrap the word, words, or sentence with the ```
<em></em> (short for emphasis) tag:
```
<p>Sometimes you need to <em>emphasize text</em> to your paragraph to make a point!</p>
You can also use the old school
```
<i></i>
```
 
For bold text, we wrap the word words or sentence with the ```
<strong></strong>```
 tag or ```
<bold></bold>
```
pair.

<p>Other times, you need to <strong>bolden text</strong> to your paragraph to make a point!</p>

#### Headings and Hierarchy:

Think of headings to help organize content and call out the “titles” of sections of our webpage. The size/number of the heading tag you use helps describe how important the topic (usually paragraphs and images and content related to the heading text) is.

There are 6 heading sizes:
```
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
```
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

#### Links and Anchors:

What if you want to send a user to another part of your site or an external site? You use hyperlinks/links:
```
<a href="http://https://www.google.com/">Google It!</a>
```
You’ll there is some extra text in our opening anchor tag:

`href="http://https://www.google.com/"`

That is an **attribute** named **href**!

The href value tells your link where to go once it is clicked by a user.

An **attribute** is a special code that can enhance or modify a tag. They are usually located in the starting tag after the tag name. We will see a lot of them as we progress.

#### Adding images to a page:

What about images? We add them like this:
```
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Female_pair.jpg/800px-Female_pair.jpg"/>
```
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Female_pair.jpg/800px-Female_pair.jpg"/>

Whoa, there’s another one of those attributes! You’ll notice the src attribute tells us the location of the image file. In this case, it just links to a picture of a chicken on wikipedia, but as we progress we will creating our own images that live in our site folders.

Every image on the web has its own image URL. Simply right-click on an image and choose “Copy image URL.” Paste that URL in quotes after src= to insert with your <img> tag.

But let’s just talk about a little more about the image tag.
```
<img src="imagesource.jpg" / >
```
Let’s take another look at this image tag. Remember paragraphs and headings and anchor tags all had opening and closing tags:

```
<p></p>
<h1></h1>
<a href="#"></a>
```
The image source does not have a closing tag but it has an extra / to close it.
```
<img />
```
These are called self closing tags. We will se a few of them as we move forward.

##### A note about indentation:

You’ll notice that when we nest tags , we indent them more. This helps us keep track of the hierarchy of the site and makes the code way more readable.
```
<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
</body>
</html>
```
#### Lists and List Items:

There are 2 kinds of lists. Ordered lists and unordered lists. You guessed it. Ordered lists have numbers, and unordered lists do not:

<ol>
<li>This is a list item in an ordered list.</li>
<li>This is another one.</li>
</ol>

<ul>
<li>This is a list item in an unordered list</li>
<li>This is another one.</li>
</ul>

Lists have list items nested within them. Each list item is another “bullet point”:

Ordered list:
```
<ol>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ol>
```
Unordered list:
```
<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
```
You will notice the the `<ol></ol>` and the `<ul></ul>` tags just wrap the `<li></li>`list items within them. They help separate this list item content from surrounding paragraphs and heading tags and will be very useful when we start styling these elements with CSS.

#### Code from class

#### HW (DUE BEFORE MONDAY 5PM):
<ul>
<li>Set up your Server and FTP Client like <a href="https://cyberduck.io">Cyberduck</a>, <a href="https://filezilla-project.org/">Filezilla</a>, or <a href="https://fetchsoftworks.com/">Fetch</a> (available for <a href="http://www.nyu.edu/life/information-technology/getting-started/software/nyu-it-licensed-software.html">free through NYU's IT services</a>, Mac only).</li>
<li><b>Tour of your apartment </b> <br />Create a website that allows us to navigate your home with HTML pages.</li>
<ul>
<li>It's best to think of this as a narrative with a few different paths. You may find it helpfu to paper to write/sketch your ideas <em>before</em> you start coding. What content will be shared across all the pages? What elements will be shared across each page, but with different content? How does a user advance from one page to the next? Is there a beginning, end, or home page?</li>
<li>Create a base HTML file that has elements that will be shared across all the pages. Pick elements that describe the type of content that will go on each page using empty placeholder html elements. </li>
<li>Use some of the elements we discussed in class, such as: <code>a</code> to link pages, <code>h1</code> to indicate what room you;re showing us, <code>p</code> to , <code>img</code>, or lists (<code>ul/ol</code> + <code>li</code>).Don't feel bound to these tags only.</li>
<li>Don't worry about how it looks just yet, we'll cover style next week.</li>
<li>If your server space is ready, upload your project to a server using (S)FTP. If it's not ready, upload to github.</li>
<li>Send me the link to your homework BEFORE MONDAY AT 5PM</li>.
</ul>
<li>Suggested Reading:<ul>
<li>HTML & CSS Jon Duckett ch1-6 ( ebook available thru <a href="http://poly.libguides.com/ebooks">NYU’s Library website</a> )
</li>
</ul>