#/bin/sh
location=$(xdotool getmouselocation)
x=$(echo $location | cut -d ":" -f2 | cut -d " " -f1)
y=$(echo $location | cut -d ":" -f3 | cut -d " " -f1)
xdotool move
