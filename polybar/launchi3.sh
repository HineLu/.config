#!/usr/bin/env bash

# Terminate already running bar instances
# killall -q polybar

# Wait until the processes have been shut down
# while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

# Launch bar1 and bar2
#polybar base &

sleep .5

if ! pgrep -x polybar ; then
	echo "poly not running"
	polybar bar1

else
	pkill polybar
	polybar bar1 
fi
echo "Bars launched..."
