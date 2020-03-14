if [ ! -d "/tmp/ScreenShortcut/" ]; then
    mkdir /tmp/ScreenShortcut/
fi
scrot -s -b -m -e 'xclip -selection clipoard -t "image/png" $f && mv $f /tmp/ScreenShortcut/%Y-%m-%d_%Hh%mm%Ss_select.png'




