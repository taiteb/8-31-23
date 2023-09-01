# Half-tone Random Walker 

## This was a really fun one to figure out! 

This started with just figuring out the random walker 'algorithm', and how to implement it in a pseudo class I could call in multiple instances. Once I had that figured out, I started messing with variables like color, step size, and strokewidth, to give it a little more variance in texture. 

At a certain point, when things started to lock in, it started to remind me of old half-tone dots (ie. Roy Lichtenstein, old comic book texture), so I looked up what angles they used to offset the masks. I set up a transformation function in the object, randomized what angle it'd be offset at (just once, on instance, not frame-by-frame variable like strokewidth to keep the path clear). Once I had this set up, the scaffolding was pretty much done- everything else I did with this was just tweaking parameters to generate different pieces. In particular, you can 'weight' the movement by giving certain directions a higher chance of happening (leading to smoke-like streaks); you can customize color palette by either weighting the setup color array population parameters (I tend towards high green/blue with a touch of red) or by muting the setup() color array population and putting in a preset color pallete within the array. 

Halftone can be bypassed by simply feeding the point() call in .update() the x and y values rather than xHT(x half-tone) and yHT values, depending on what you're going for. 