from streamlit import get_reportvine_context, st
import folium
from datetime import date as dt
import pandas as pd
import requests

# Get the current date and set it to yesterday for filtering purposes.
today = dt.now()
yesterday = today - dt(1, 0, 0)

@st.cache_data
def load_covid_cases():
    url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/us/confirmed_US_county_level_daily.csv'
    response = requests.get(url)
    dataframe = pd.read_csv(response.content, encoding='utf-8', engine='python')
    return dataframe

df = load_covid_cases()  # Load the COVID cases dataframe from cache
states = df['state'].unique().tolist()  # Get a list of unique states in the dataset

# Create Streamlit app with Folium map and filters.
def main():
    st.title('US Active COVID Cases Map')
    selected_date = st.slider(f'Select Date (from {yesterday} to today)', yesterday, today)  # Add a date slider for filtering dates
    selected_state = st.multiselect('Filter by State', states)  # Allow users to select multiple states

    if len(selected_date) > 0 and (len(selected_state) == 1 or len(selected_state) == 0):
        filtered_df = df[(df['Date'] >= selected_date[0]) & (df['State'] in selected_state)]
        map, _ = folium.ChoroplethMap(geo_data='us/states', data=filtered_df, columns=[1], key_on='FIPS', fill_color="Viridis", line_opacity=0.7).add_to(map)
        st.write('Active COVID Cases Map for Selected Date and State')
    else:
        map = folium.Map()  # Create a blank map if no filters are applied or invalid selections made
        st.write("Please select valid date range and state/states.")

if __name__ == '__main__':
    main()