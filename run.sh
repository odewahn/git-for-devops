#!/bin/sh
httpServe &
jupyter notebook --no-browser --port 8888 --ip=*
