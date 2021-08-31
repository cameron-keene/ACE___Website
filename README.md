# Cloning and testing repository for local development

### Using terminal
Install GitHub pages `npm install gh-pages --save-dev`

Clone the repository: `clone https://github.com/cameron-keene/ACE_Website.git`

Create a personal branch: `git checkout -b <branch_name>`

Add the files to the branch: `git add <file_name>` (to add a NEW file to branch) OR `git add .` (to update ALL files in branch)

Commit to the branch: `git commit -m "Your message"`

Push the commit to your remote branch: `git push --set-upstream origin <branch_name>`

Run updated project: `npm start`

### Using GH desktop (assuming you also have Sublime Text)
Clone the repository
* Current Repository > Add > Clone Repositories > URL > https://github.com/cameron-keene/ACE_Website.git 

Create a personal branch
* Current Branch > New Branch > "branch_name" > Create Branch > (If prompted) Bring my changes to "branch_name" > Switch Branch

Edit files
* On menu bar > Repository > Open in Sublime Text >  (to add a NEW file to branch) OR `git add .` (to update ALL files in branch)

Commit to the branch and push it to the remote
* Commit to "branch_name" > Publish Branch > Push Origin

Run updated project
* `npm start`

# Deploying Project to gh-pages
* npm run deploy 
* commit/push to your branch
* merge to main branch
* result will show up on gh-pages in roughly 5-10 minutes


# Getting started with React-Router-Dom
* Install with command: npm install react-router-dom@5 
* Uses version 5 of react-router, lastest stable build
* Import in App.js "import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';"
* contain everything inside of return in App.js with Router tags
* then use Switch tags and Route tags to contain call to component
* Import in NavBar component "import { Link } from 'react-router-dom';"
* use Link tags inside of NavItem tags to create links

# Clearing npm start errors from out-of-date node_modules folder and package_lock file.
* MAC
* rm package-lock.json
* rm -rf node_modules/
* npm install --legacy-peer-deps
*
* WINDOWS
* del package-lock.json
* rmdir /S node_modules
* npm install --legacy-peer-deps
* 

# Install React-Social-Icons
* referenced from https://github.com/jaketrent/react-social-icons
* npm install react-social-icons
* import { SocialIcon } from 'react-social-icons';
* How to use: 
* SocialIcon url={linkedin} , linkedin = url of the persons actual linkedin page
