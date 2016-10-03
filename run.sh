#!/bin/sh
httpServe -port 5000 &
jupyter notebook --no-browser --port 8888 --ip=*
