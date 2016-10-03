#!/bin/sh
jupyter notebook --no-browser --port 8888 --ip=*
httpServe -port 5000
