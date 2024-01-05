# Build and Run Streamlit Folium Geomap App with Date and State Filters for US COVID Cases

#!/bin/bash
set -euxo pipe

# Clone the repository containing your app code
git clone https://github.com/your-username/covid_mapper.git
cd covid_mapper

# Install required dependencies for Streamlit and Folium libraries
pip install streamlit folium pandas geopandas requests matplotlib numpy plotly bokeh jupyter

# Build the Docker image using your app code, requirements file, and custom entrypoint script
docker build -t covid_mapper . --build-arg ENTRYPOINT=app.py \
  --squash --no-cache --rm --progress=plain

# Run the built docker container with Streamlit server enabled on port 8501 and mounting your app code directory as a volume
docker run -it -p 8501:8501 \
  --volume "$(pwd)/covid_mapper":/app \
  covid_mapper