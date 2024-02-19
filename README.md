# LMS FRONTEND

### SETUP INSTRUCTIONS

1. Clone the project

'''
        git clone https://github.com/Abhi-Ary/learningManagementSystem-frontend.git
'''

2. Move into the directory

'''
        cd lms-frontend
'''

3. Install dependencies

'''
        npm install
'''

4. Run the server

'''
        npm run dev
'''

### Setup instructions for tailwind
[tailwind official instruction docs](https://tailwindcss.com/docs/installation)

1. Install tailwind css

'''
        npm install -D tailwindcss
'''

2. Create tailwind config file

'''
        npx tailwindcss init
'''

3. Add file extension to tailwind config file in the content property

'''
        "./src/**/*.{html,js,jsx,ts,tsx}"
'''

4. Add the tailwind directives at the top of the 'index.css' file

'''
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
'''

### Adding plugins and dependencies

'''
        npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
'''

### Configure auto import sort eslint

1. Install simple import sort

'''
        npm i -D eslint-plugin-simple-import-sort
'''

2. Add rule in '.eslint.cjs'
'''
        'simple-import-sort/imports': 'error',
'''

3. Add simple-import-sort plugins in '.eslint.cjs'

'''
        plugins: [..., 'simple-import-sort'],
'''

4. To enable auto import sort on file save in vscode
        -Open 'setting.json'
        -Add the following config
'''
        "editor.codeActionsOnSave": {
                "source.fixAll.eslint": true
        }
'''