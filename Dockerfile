FROM jupyter/minimal-notebook:latest

RUN pip install bash_kernel
RUN python -m bash_kernel.install


# launchbot-specific labels
LABEL name.launchbot.io="Git for DevOps"
LABEL workdir.launchbot.io="/usr/workdir"
LABEL description.launchbot.io="An introduction to git for DevOps, excerpted from Modern Linux System Administration"
LABEL 8888.port.launchbot.io="Jupyter Notebook"

# Set the working directory
WORKDIR /usr/workdir

# Expose the notebook port
EXPOSE 8888

# Start the notebook server
CMD jupyter notebook --no-browser --port 8888 --ip=*

