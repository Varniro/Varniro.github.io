# CarouselsAndProgressBars
So, there might be a case when you need to display a skill set, but you have so many of them(let us consider) that you fall short of progress bars. Here we can use carousels to divide the skill set into groups of progress bars and thus make it look minimal and classy. In this repo, i've used owl-carousel and Bootstrap's progress bar js.

# Demo
![](https://ibb.co/3yYLWLc)


# Install
No. Download the files @ __ @  >__<

# How to use
Place all the contents you want to use in your carousel in the following division
``````
<div class="owl-carousel">
</div>
``````
Add as many items(slides) you want to add to the carousel by using class item
``````
<div class="item">
</div>
``````
Then in the item div, customise the look and feel of your carousel slide
You can then add a (or as many as you want) progress bar(s) in the slide as:
``````
<div class="progress">
  <div class="progress-bar html" role="progressbar" data-transitiongoal="92"></div>
</div>
<div class="progress">
  <div class="progress-bar c" role="progressbar" data-transitiongoal="87"></div>
</div>
``````
The data-transition goal helps you to set the progress of your progress bar. In this case the progress bar will be 92% and 87% filled.


# Understanding main.js

The following code starts the animation when the user scrolls to the skills section by using the function start_counter.
``````
$(function() {
    var oTop = $('#skills').offset().top - window.innerHeight; //skills is the id of the <section></section> in which the carousel div exists
    $(window).scroll(function(){

        var pTop = $('body').scrollTop();
        if( pTop >= oTop ){
            start_counter ();
        }
    });
});
``````
In the start_counter function, you can specify how much progress do you want to show in each particular progress bar

``````
function start_counter(){
    var $progressBar = $('.html').css('width','92%');
    var $progressBar1 = $('.c').css('width','87%');
}
``````
and so on as many as you want.
