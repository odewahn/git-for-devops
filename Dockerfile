FROM jupyter/minimal-notebook:latest

# Install the bash kernel on the image
RUN pip install bash_kernel
RUN python -m bash_kernel.install

USER root

# Install a simple server that can publish a directory as a file
RUN wget -q https://github.com/odewahn/httpServe/releases/download/0.0.2/httpServe-0.0.2-linux-amd64
RUN mv httpServe-0.0.2-linux-amd64 /usr/local/bin/httpServe
RUN chmod +x /usr/local/bin/httpServe

# launchbot-specific labels
LABEL name.launchbot.io="Git for DevOps"
LABEL workdir.launchbot.io="/usr/workdir"
LABEL description.launchbot.io="An introduction to git for DevOps, excerpted from Modern Linux System Administration"
LABEL 8888.port.launchbot.io="Jupyter Notebook"
LABEL 5000.port.launchbot.io="Static Site"

# Set the working directory
WORKDIR /usr/workdir

# Expose the notebook port
EXPOSE 8888
EXPOSE 5000

# Install and run the startup script
RUN cp ./run.sh /usr/local/bin/run.sh
RUN chmod +x /usr/local/bin/run.sh

USER jovyan
CMD ["/usr/local/bin/run.sh"]
