 # COVID-19 Active Cases GeoMap App

This repository contains a Streamlit Folium geomap application that displays active COVID cases in the United States. It features date and state filters for enhanced user experience. The app is designed to be easily deployable using Docker, with all necessary files provided.

## File Layout
- `app.py`: Main Python script containing your Streamlit Folium geomap application code.
- `requirements.txt`: List of required dependencies for the project. Install them by running `pip install -r requirements.txt`.
- `static/` and `templates/` directories: Contain static files (e.g., images, CSS) and template files used in your application respectively.
- `data/` directory: Houses all data related to the project, such as COVID cases datasets.
- `docker_build.sh`: Bash script for building Docker image from the provided Dockerfile. Run it with `./docker_build.sh`.
- `Dockerfile`: Contains instructions on how to build a custom Docker image containing your application and its dependencies.

## Deployment Instructions
1. Clone this repository or download all files locally.
2. Install Python, Streamlit, Folium, and other required libraries as per the requirements.txt file.
3. Ensure you have Docker installed on your system (https://docs.docker.com/get-started).
4. Build a custom Docker image using `./docker_build.sh`. This will create an image with all necessary dependencies and your application code.
5. Run the containerized app by executing: `docker run -p 8501:8501 <image-name>` (replace `<image-name>` with the name of your built Docker image). This will make your Streamlit Folium geomap application accessible at http://localhost:8501.
6. Enjoy exploring and filtering active COVID cases in the US!

For any questions or issues, feel free to open an issue on this repository.

---

# Create A Streamlit Folium Geomap With Date Filters And State Filters Of The Us That Shows Active Covid Cases.
This artifact is created by [Kettle](kettle.gnyan.ai) Promptware Development Hub.
- Date: `2024-01-02 08:47:55`
- Model: `neural-chat:latest`
- File Prompt: <pre>You are an EXPERT developer who will design, structure, and write great software application code.<br>Given a brief description of a story, you will first create a file structure of the necessary files and folders.<br>For example, a python hello world program will require main.py, requirements.txt, Dockerfile, readme.md, docker\_run.sh files: your response will therefore be --<br>\`\`\`files<br>\[\("main.py", "", "file"\), <br>\("requirements.txt", "", "file"\), <br>\("docs", "", "dir"\), <br>\("readme.md", "docs", "file"\), <br>\("Dockerfile", "", "file"\), <br>\("build", "", "dir"\), <br>\("docker\_build.sh", "build", "file"\), <br>\("docker\_run.sh", "build", "file"\)\]<br>\`\`\`<br>Take a deep breath and reason step-by-step. Please be exhaustive in the files you create. <br>You will NOT need \`requirements.txt\` for non Python application, in such instances, feel free to deviate from requirements archetype. Choose appropriate dependency file for the programming language: for example, in Perl, you will create cpanfile instead of requirements.txt.<br>You will present a single manifest of files: You are NOT allowed to split subfolder listings in your response.<br>For example, \`\`\`<br>Inside the 'build/src' directory: \[\("main.py", "", "file"\), \("utils.py", "", "file"\), \(".gitignore", "", "file"\)\]\`\`\` is prohibited.<br>\`\`\`files \[\("build", "", "dir"\), \("src", "build", "dir"\), \("main.py", "build/src", "file"\), \("utils.py", "build/src", "file"\), \(".gitignore", "build/src", "file"\)\]\`\`\` is allowed.<br>Each tuple in the response will be a triple of \(filename, directory path, type\). Filename MUST be a filename ONLY, not a path. directory path MUST be a path ONLY, not a filename.<br><br>You are NOT allowed to offer multiple options like sbt or gradlew or maven archetypes. Choose ONE best option.<br>You want to be very diligent in the directory structure. Your response MUST be in the form of a single list of tuples. Each tuple is a \(file|directory name, its base directory path, and its type \{\{\{\{file|dir\}\}\}\}\). <br>Make the directory path relative to the top level directory. You ARE NOT ALLOWED to create directories outside of the top level directory.<br>ALWAYS quote filenames and directories that have whitespaces. Surround the response in \`\`\` backticks at the start and end<br>Description: '''\{\{question\}\}'''<br>Response: <br>\`\`\`files<br></pre>
- README Prompt: <pre>You are an EXPERT developer who will design, structure, and write great software application code. <br>Given a brief description of a story and a file layout, you will author a readme.md file. <br>You will respond with the contents of the readme.md file ONLY. Respond in markdown format and surround the response in \`\`\` backticks at the start and end. Please be VERY brief and ONLY respond in markdown format to the question.<br>Deliberate the desscription and add some interpreted markdown to the readme.md file.<br>Description: '''\{\{question\}\}'''<br>File Layout: '''\{\{file\_layout\}\}'''<br>\`\`\`readme.md<br></pre>
- Artifact: `artifacts/1FCBA3BE91FB53BBFC8BD66601A85E89`
---
