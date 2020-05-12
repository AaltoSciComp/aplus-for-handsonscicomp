# Course template for A-plus learning environment for Hands-on scientific computing course

After cloning this project you should do the following:
- Install Docker if you do not have it already
- Move to the folder where you installed the project and execute `git submodule init && git submodule update`
- Compile course material with `./docker-compile.sh`
- Start A+ with `./docker-up.sh`
- Course should be running at  http://localhost:8000
- Stop A+ by pressing Q, S, ESC or CTRL+C in the terminal. Notice that S and ESC save database, Q and CTRL+C remove all data. To test parts of the course press S or ESC and then restart with same data. However, you can remove the data every now and then to clean submissions. 
- When you see A+ front page on your local machine, it will ask you to log in. In test environment you can use roles: root, assistant and student. Passwords for these users are the role.

# Acos server exercises
- See this page: https://github.com/acos-server/acos-draganddrop to set up
- Remember to run `npm install` and `npm run prepare` before you can see your exercises on localhost.

# Additional links

- A+ quickstart guide: https://apluslms.github.io/guides/quick/ for template course which works as a manual guide to A+ system.