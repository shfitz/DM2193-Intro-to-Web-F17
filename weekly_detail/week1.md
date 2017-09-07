## <b>Sept 5<br/> Setup & Intros</b>

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

####<b>HW</b> <small>*due next class unless otherwise specified
 <ul>
 <li>Join our <a href="https://introtowebfall2017.slack.com" target="external">Slack channel</a></li>
 <li>Sign up for <a href="https://github.com">GitHub and send me the link for the repo for this class</a> on Slack</li>
 <li>Read this <a href="http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners">beginners intro to git</a>.  Feel  free  to  use  a  GUI.</li>
 <li>Download a text editor of your choice. <a href="http://www.sublimetext.com/">Sublime Text</a> and <a href="http://brackets.io/">Brackets</a> are two great choices. Atom is cool too.</li>
 <li>Bring in a recipe to class (post it to your github acccount!), it doesn't need to be overly complicated, but it should have a couple of ingredients, and a list of instructions on what to do.</li>

<!--
<li>Pick a website. What is the goal of this site? How does the design reflect that goal? How is the website "<a href="https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/">responsive</a>"? 
 <ul><li>Post a link and a short paragraph about it to the HW channel on Slack with hashtag #wk1a. </li><li>Tip: Use <a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome Developer Tools</a> or <a href="http://quirktools.com/screenfly">Quirktools Screenfly</a> to see what the website looks like on different size screens</li><li>Bonus: Use <a href="https://archive.org/web/" target="external">Internet Archive's Wayback Machine</a> to show how the design has changed over time. </li></ul>
-->


<li>Get some webspace!</li>
 <ul><li>You can get your own web server space for more control of your domain. I can recommend <a href="http://www.siteground.com">siteground.com</a> or <a href="https://www.dreamhost.com/promo/edunyu/">dreamhost.com</a>.</li><li>Alternatively, you can receive web server space from IDM's Technology Manager, Elton Kwok, MAGNET 883. Email eltonkwok@nyu.edu to set up your web server space</li><li>IDM's FTP server info: http://sites.bxmc.poly.edu (Use active mode to connect)
 </ul>
 </ul>


 ## <b>Sept 7<br/> HTML, FTP</b>

#### In Class:
<ul>
 <li>Vocab</li>
        <ul>
        <li>Client/Server</li>
        <li>Client-Side (Front-End), Server-Side (Back-End)</li>
        </ul>
    </ul>
 <li>Text Editors</li>
  <ul>
  <li><a href="http://www.sublimetext.com/">Sublime Text</a></li>
  <li><a href="http://brackets.io/">Brackets</a></li>
  <li><a href="https://www.panic.com/coda/">Coda</a> (Mac Only)</li>
  <li><a href="https://atom.io/">Atom</a></li>
  <li><a href="https://www.textpad.com/">TextPad</a> (Windows Only)</li>
    <li><a href="https://notepad-plus-plus.org/">Notepad ++</a> (Windows Only)</li>
  </ul>
 <li>Intro to HTML</li>
    <ul>
    <li>HTML - creates structure for the web, describes the structure of a page</li>
    <li>Structure: hierarchy, what’s important, meaning, how should it be interpreted by a person (or a computer)</li>
    <li><b><a href="http://www.w3schools.com/html/html_elements.asp">Elements</a></b> - describe the structure of a page</li>
    <li><b>Element Tags</b> - Elements typically have opening and closing tags, and you can put content in between the tags. <pre>&lttag&gtcontent goes here&lt/tag&gt</pre>
    <li><b><a href="http://www.w3schools.com/html/html_attributes.asp">Attributes</a></b> - Elements have atributes like <code>attribute="value"</code></li>
    <li>All HTML pages have the following elements: <code>html</code>, <code>head</code>, <code>title</code>, and <code>body</code></li>
    <ul>
        <li>Text</li>
        <li><a href="Links</a>: <pre> <a href="path">Links</a></pre></li>
        <li><a href="http://www.w3schools.com/html/html_images.asp">Images</a>: <pre> &ltimg src="path" alt="description of image"&gt
        &lt!--comment: images have no closing tag --&gt </pre></li>  
        <li><a href="http://www.w3schools.com/html/html_lists.asp">Lists</a></li>
    <li> absolute url (with http://) vs relative url</li>
    </ul>
 <li>How to set up your Domain, Hosting</li>
 <li>(S)FTP - transfer files to your server</li>
 <li>Discussion prompted by HW assignments</li>
 <li>Review assignment for next week</li>
</ul>

#### Code from class

#### HW (DUE BEFORE MONDAY 5PM):
<ul>
 <li>Set up your Server and FTP Client like <a href="https://cyberduck.io">Cyberduck</a>, <a href="https://filezilla-project.org/">Filezilla</a>, or <a href="https://fetchsoftworks.com/">Fetch</a> (available for <a href="http://www.nyu.edu/life/information-technology/getting-started/software/nyu-it-licensed-software.html">free through NYU's IT services</a>, Mac only).</li>
 <li><b>Tour of your apartment </b> Create a website that allows us to navigate your home with HTML pages.</li>
 <ul>
    <li>It's best to think of this as a narrative with a few different paths. You may find it helpfu to paper to write/sketch your ideas <em>before</em> you start coding. What content will be shared across all the pages? What elements will be shared across each page, but with different content? How does a user advance from one page to the next? Is there a beginning, end, or home page?</li>
 <li>Create a template.html file that has elements that will be shared across all the pages. Pick elements that describe the type of content that will go on each page using empty placeholder html elements. </li>
 <li>Use some of the elements we discussed in class, such as: <code>a</code> to link pages, <code>h1</code> to indicate what room you;re showing us, <code>p</code> to , <code>img</code>, or lists (<code>ul/ol</code> + <code>li</code>).Don't feel bound to these tags  only.</li> 
 <li>Don't worry about how it looks just yet, we'll cover style next week.</li>
 <li>If your server space is ready, upload your project to a server using (S)FTP.</li>
 </ul>
 <li>Suggested Reading:<ul>
    <li>HTML & CSS Jon Duckett ch1-6 ( ebook available thru <a href="http://poly.libguides.com/ebooks">NYU’s Library website</small></a> )
    </li>
    </ul>
   
 </ul>
 </li>

</ul>